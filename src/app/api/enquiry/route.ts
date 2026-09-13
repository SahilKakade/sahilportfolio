import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX = {
  name: 100,
  email: 254,
  phone: 40,
  website: 500,
  projectType: 100,
  details: 5000,
};

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ error: "Invalid request format." }, { status: 415 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceRoleKey) {
      console.error("Missing Supabase server environment variables.");
      return NextResponse.json(
        { error: "The enquiry service is temporarily unavailable. Please email directly." },
        { status: 503 }
      );
    }

    const body = await request.json();

    // Honeypot: bots often fill hidden fields; real visitors never see this.
    const company = clean(body.company, 100);
    if (company) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const name = clean(body.name, MAX.name);
    const email = clean(body.email, MAX.email).toLowerCase();
    const phone = clean(body.phone, MAX.phone);
    const website = clean(body.website, MAX.website);
    const projectType = clean(body.projectType, MAX.projectType);
    const details = clean(body.details, MAX.details);

    if (!name || !email || !projectType || !details) {
      return NextResponse.json(
        { error: "Please complete your name, email, project type and project details." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (details.length < 10) {
      return NextResponse.json(
        { error: "Please tell me a little more about what you need." },
        { status: 400 }
      );
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const { error } = await supabase.from("enquiries").insert({
      name,
      email,
      phone: phone || null,
      website: website || null,
      project_type: projectType,
      details,
    });

    if (error) {
      console.error("Supabase enquiry insert error:", {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint,
      });

      return NextResponse.json(
        { error: "I couldn't save your enquiry right now. Please try again or contact me directly on WhatsApp." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Enquiry received successfully." },
      {
        status: 201,
        headers: { "Cache-Control": "no-store" },
      }
    );
  } catch (error) {
    console.error("Enquiry API error:", error);
    return NextResponse.json(
      { error: "Something went wrong while sending your enquiry. Please try again or use WhatsApp." },
      { status: 500 }
    );
  }
}
