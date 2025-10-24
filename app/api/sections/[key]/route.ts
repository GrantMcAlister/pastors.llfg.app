import { type NextRequest, NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

export async function GET(request: NextRequest, { params }: { params: Promise<{ key: string }> }) {
  const { key } = await params

  console.log("[v0] API route called with key:", key)

  try {
    const filePath = path.join(process.cwd(), "data", "content.json")
    console.log("[v0] Reading from file path:", filePath)

    const fileContents = await fs.readFile(filePath, "utf8")
    const sections = JSON.parse(fileContents)

    console.log("[v0] Total sections loaded:", sections.length)

    const section = sections.find((s: any) => s.section_key === key)

    console.log("[v0] Section found:", !!section)

    if (!section) {
      console.log(
        "[v0] Available section keys:",
        sections.map((s: any) => s.section_key),
      )
      return NextResponse.json({ error: "Section not found" }, { status: 404 })
    }

    console.log("[v0] Returning section:", section.section_key)
    return NextResponse.json({
      section_key: section.section_key,
      content_md: section.content_md,
    })
  } catch (error) {
    console.error("[v0] Error reading content:", error)
    return NextResponse.json({ error: "Failed to load content" }, { status: 500 })
  }
}
