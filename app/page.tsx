"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SectionWrapper } from "@/components/section-wrapper"
import { VideoEmbed } from "@/components/video-embed"
import { Button } from "@/components/ui/button"
import { MarkdownRenderer } from "@/components/markdown-renderer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <SectionWrapper sectionKey="hero" className="bg-gradient-to-b from-background to-muted/20">
          {(data) => (
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <MarkdownRenderer content={data.content_md} className="text-center" />
              <VideoEmbed placeholder className="max-w-3xl mx-auto" />
            </div>
          )}
        </SectionWrapper>

        {/* Problem Section */}
        <SectionWrapper sectionKey="problem" className="bg-background">
          {(data) => (
            <div className="max-w-3xl mx-auto">
              <MarkdownRenderer content={data.content_md} />
            </div>
          )}
        </SectionWrapper>

        {/* Solution Section */}
        <SectionWrapper sectionKey="solution" className="bg-muted/30">
          {(data) => (
            <div className="max-w-3xl mx-auto">
              <MarkdownRenderer content={data.content_md} />
            </div>
          )}
        </SectionWrapper>

        {/* Trust Section */}
        <SectionWrapper sectionKey="trust" className="bg-background">
          {(data) => (
            <div className="max-w-4xl mx-auto">
              <MarkdownRenderer content={data.content_md} />
            </div>
          )}
        </SectionWrapper>

        {/* Pastors Ask Section (CTA) */}
        <SectionWrapper sectionKey="pastors_ask" className="bg-primary/5">
          {(data) => (
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <MarkdownRenderer content={data.content_md} className="text-center" />
            </div>
          )}
        </SectionWrapper>

        {/* Next Steps Section */}
        <SectionWrapper sectionKey="pastors_next_steps" className="bg-background">
          {(data) => (
            <div className="max-w-3xl mx-auto space-y-8">
              <MarkdownRenderer content={data.content_md} />
              <div className="flex justify-center">
                <Button size="lg" className="text-lg px-8 py-6">
                  Schedule Feedback Session
                </Button>
              </div>
            </div>
          )}
        </SectionWrapper>
      </main>

      <SiteFooter />
    </div>
  )
}
