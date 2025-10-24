import { type NextRequest, NextResponse } from "next/server"
import { getSupabaseServerClient } from "@/lib/supabase/server"

export async function GET(request: NextRequest, { params }: { params: Promise<{ key: string }> }) {
  const { key } = await params

  const supabase = await getSupabaseServerClient()

  const { data: section, error } = await supabase
    .from("sections")
    .select("section_key, content_md")
    .eq("section_key", key)
    .single()

  if (error || !section) {
    return NextResponse.json({ error: "Section not found" }, { status: 404 })
  }

  return NextResponse.json(section)
}
