"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { MarkdownRenderer } from "./markdown-renderer"

interface SectionData {
  section_key: string
  content_md: string
}

interface SectionWrapperProps {
  sectionKey: string
  className?: string
  children?: (data: SectionData) => React.ReactNode
}

export function SectionWrapper({ sectionKey, className = "", children }: SectionWrapperProps) {
  const [data, setData] = useState<SectionData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchSection() {
      try {
        const response = await fetch(`/api/sections/${sectionKey}`)
        if (!response.ok) {
          throw new Error("Failed to fetch section")
        }
        const sectionData = await response.json()
        setData(sectionData)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchSection()
  }, [sectionKey])

  if (loading) {
    return (
      <section className={`py-12 md:py-16 ${className}`}>
        <div className="container">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-3/4" />
            <div className="h-4 bg-muted rounded w-full" />
            <div className="h-4 bg-muted rounded w-5/6" />
          </div>
        </div>
      </section>
    )
  }

  if (error || !data) {
    return (
      <section className={`py-12 md:py-16 ${className}`}>
        <div className="container">
          <p className="text-destructive">Error loading section: {error}</p>
        </div>
      </section>
    )
  }

  if (children) {
    return (
      <section className={`py-12 md:py-16 ${className}`}>
        <div className="container">{children(data)}</div>
      </section>
    )
  }

  return (
    <section className={`py-12 md:py-16 ${className}`}>
      <div className="container">
        <MarkdownRenderer content={data.content_md} />
      </div>
    </section>
  )
}
