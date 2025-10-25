import { type NextRequest, NextResponse } from "next/server"
import sections from "@/data/content.json"

export async function GET(request: NextRequest, { params }: { params: Promise<{ key: string }> }) {
  const { key } = await params

  try {
    const section = sections.find((s) => s.section_key === key)

    if (!section) {
      return NextResponse.json({ error: "Section not found" }, { status: 404 })
    }

    return NextResponse.json({
      section_key: section.section_key,
      content_md: section.content_md,
    })
  } catch (error) {
    console.error("[v0] Error loading content:", error)
    return NextResponse.json({ error: "Failed to load content" }, { status: 500 })
  }
}
