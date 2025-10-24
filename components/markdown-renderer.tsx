"use client"

import { useEffect, useState } from "react"

interface MarkdownRendererProps {
  content: string
  className?: string
}

export function MarkdownRenderer({ content, className = "" }: MarkdownRendererProps) {
  const [html, setHtml] = useState("")

  useEffect(() => {
    // Simple markdown parsing - in production use a proper library
    let parsed = content

    // Headers
    parsed = parsed.replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mb-3">$1</h3>')
    parsed = parsed.replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold mb-4">$1</h2>')
    parsed = parsed.replace(/^# (.*$)/gim, '<h1 class="text-4xl md:text-5xl font-bold mb-6">$1</h1>')

    // Bold
    parsed = parsed.replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold">$1</strong>')

    // Blockquotes
    parsed = parsed.replace(
      /^> (.*$)/gim,
      '<blockquote class="border-l-4 border-primary pl-4 italic my-4">$1</blockquote>',
    )

    // Lists
    const lines = parsed.split("\n")
    let inList = false
    const processedLines: string[] = []

    lines.forEach((line) => {
      if (line.trim().startsWith("- ")) {
        if (!inList) {
          processedLines.push('<ul class="list-disc list-inside space-y-2 my-4">')
          inList = true
        }
        processedLines.push(`<li>${line.trim().substring(2)}</li>`)
      } else {
        if (inList) {
          processedLines.push("</ul>")
          inList = false
        }
        if (line.trim()) {
          processedLines.push(`<p class="mb-4 leading-relaxed">${line}</p>`)
        }
      }
    })

    if (inList) {
      processedLines.push("</ul>")
    }

    setHtml(processedLines.join("\n"))
  }, [content])

  return (
    <div
      className={`prose prose-lg max-w-none dark:prose-invert ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
