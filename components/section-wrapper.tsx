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
  variant?: "full" | "section" | "card" | "card-emphasized"
  className?: string
  children?: (data: SectionData) => React.ReactNode
}

export function SectionWrapper({ sectionKey, variant = "section", className = "", children }: SectionWrapperProps) {
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

  const getContainerClasses = () => {
    if (variant === "card" || variant === "card-emphasized") {
      return "container max-w-4xl mx-auto px-4"
    }
    return "container px-4"
  }

  const getCardClasses = () => {
    if (variant === "card") {
      return "bg-card border border-border/50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-12 md:p-16"
    }
    if (variant === "card-emphasized") {
      return "bg-gradient-to-br from-card to-card/95 border-2 border-primary/20 rounded-2xl shadow-2xl p-12 md:p-20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:to-transparent before:pointer-events-none"
    }
    return ""
  }

  if (loading) {
    return (
      <section className={`py-4 md:py-8 ${className}`}>
        <div className={getContainerClasses()}>
          <div className={getCardClasses()}>
            <div className="animate-pulse space-y-6">
              <div className="h-12 bg-muted rounded-lg w-3/4" />
              <div className="h-4 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-5/6" />
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (error || !data) {
    return (
      <section className={`py-4 md:py-8 ${className}`}>
        <div className={getContainerClasses()}>
          <div className={getCardClasses()}>
            <p className="text-destructive">Error loading section: {error}</p>
          </div>
        </div>
      </section>
    )
  }

  if (children) {
    return (
      <section className={`py-4 md:py-16 ${className}`}>
        <div className={getContainerClasses()}>
          {variant === "card" || variant === "card-emphasized" ? (
            <div className={getCardClasses()}>{children(data)}</div>
          ) : (
            children(data)
          )}
        </div>
      </section>
    )
  }

  return (
    <section className={`py-12 md:py-16 ${className}`}>
      <div className={getContainerClasses()}>
        {variant === "card" || variant === "card-emphasized" ? (
          <div className={getCardClasses()}>
            <MarkdownRenderer content={data.content_md} />
          </div>
        ) : (
          <MarkdownRenderer content={data.content_md} />
        )}
      </div>
    </section>
  )
}
