import { type NextRequest, NextResponse } from "next/server"
import { getSupabaseServerClient } from "@/lib/supabase/server"

export async function GET(request: NextRequest, { params }: { params: Promise<{ key: string }> }) {
  const { key } = await params

  console.log("[v0] API route called with key:", key)

  const supabase = await getSupabaseServerClient()

  console.log("[v0] Querying sections table for key:", key)

  const { data: section, error } = await supabase
    .from("sections")
    .select("section_key, content_md")
    .eq("section_key", key)
    .single()

  console.log("[v0] Query result - error:", error)
  console.log("[v0] Query result - data:", section)

  if (error || !section) {
    console.log("[v0] Section not found, returning 404")
    return NextResponse.json({ error: "Section not found" }, { status: 404 })
  }

  console.log("[v0] Returning section data")
  return NextResponse.json(section)
}
