import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client inside the API layer with private keys
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

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