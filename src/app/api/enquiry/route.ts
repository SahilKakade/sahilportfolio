import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// 🧠 Safe fallbacks prevent Next.js from crashing when compiling during Vercel's build phase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-url-for-build.supabase.co";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-service-key-string";

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// 1. POST: Handles incoming lead form submissions
export async function POST(request: Request) {
  try {
    const { name, email, projectType, details } = await request.json();

    if (!name || !email || !projectType || !details) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // Insert form fields straight into your enquiries table
    const { error } = await supabase
      .from("enquiries")
      .insert([{ name, email, project_type: projectType, details }]);

    if (error) throw error;

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("Supabase submission error:", error);
    return NextResponse.json({ error: error.message || "Failed to log entry." }, { status: 500 });
  }
}

// 2. GET: Fetches all logged leads so your /leads dashboard can display them
export async function GET() {
  try {
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
      auth: { persistSession: false }
    });

    const { data, error } = await supabaseAdmin
      .from("enquiries")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.error("Supabase GET Query Error:", error);
      return NextResponse.json({ error: error.message, leads: [] }, { status: 500 });
    }

    return NextResponse.json({ leads: data || [] }, { status: 200 });
  } catch (error: any) {
    console.error("API GET Leads Exception:", error);
    return NextResponse.json({ error: error.message || "Failed to fetch leads.", leads: [] }, { status: 500 });
  }
}