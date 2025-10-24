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
        <SectionWrapper sectionKey="hero" variant="full" className="bg-gradient-to-b from-background to-muted/30">
          {(data) => (
            <div className="max-w-5xl mx-auto text-center space-y-12 px-4">
              <MarkdownRenderer content={data.content_md} className="text-center" />
              <VideoEmbed videoUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LlfgIntro-I6MtUHFKBm5DBu7TwnIICkAZ5Cz3V4.mp4" className="max-w-4xl mx-auto" />
            </div>
          )}
        </SectionWrapper>

        <SectionWrapper sectionKey="problem" variant="section" className="bg-muted/20">
          {(data) => (
            <div className="max-w-4xl mx-auto px-4">
              <MarkdownRenderer content={data.content_md} />
            </div>
          )}
        </SectionWrapper>

        <SectionWrapper sectionKey="solution" variant="section">
          {(data) => (
            <div className="max-w-4xl mx-auto px-4">
              <MarkdownRenderer content={data.content_md} />
            </div>
          )}
        </SectionWrapper>

        <SectionWrapper sectionKey="trust" variant="card" className="bg-muted/10">
          {(data) => <MarkdownRenderer content={data.content_md} />}
        </SectionWrapper>

        <SectionWrapper sectionKey="pastors_ask" variant="card-emphasized">
          {(data) => (
            <div className="text-center space-y-8 relative z-10">
              <MarkdownRenderer content={data.content_md} className="text-center" />
            </div>
          )}
        </SectionWrapper>

        <SectionWrapper sectionKey="pastors_next_steps" variant="card" className="bg-muted/10">
          {(data) => (
            <div className="space-y-10">
              <MarkdownRenderer content={data.content_md} />
              <div className="flex justify-center pt-4">
                <Button
                  size="lg"
                  className="text-lg px-10 py-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
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
