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
        <SectionWrapper
          sectionKey="hero"
          variant="card"
          className="bg-gradient-to-br from-primary/20 via-background to-primary/10"
        >
          {(data) => (
            <div className="text-center space-y-12">
              <MarkdownRenderer content={data.content_md} className="text-center" />
              <VideoEmbed videoUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LlfgIntro-I6MtUHFKBm5DBu7TwnIICkAZ5Cz3V4.mp4" className="max-w-4xl mx-auto" />
            </div>
          )}
        </SectionWrapper>

        <SectionWrapper
          sectionKey="problem"
          variant="card"
          className="bg-gradient-to-br from-secondary/15 to-secondary/5"
        >
          {(data) => (
            <div className="max-w-4xl mx-auto px-4">
              <MarkdownRenderer content={data.content_md} />
            </div>
          )}
        </SectionWrapper>

        <SectionWrapper sectionKey="solution" variant="card" className="bg-gradient-to-br from-accent/15 to-accent/5">
          {(data) => (
            <div className="max-w-4xl mx-auto px-4">
              <MarkdownRenderer content={data.content_md} />
            </div>
          )}
        </SectionWrapper>

        <SectionWrapper sectionKey="trust" variant="card" className="bg-gradient-to-br from-sky/15 to-sky/5">
          {(data) => <MarkdownRenderer content={data.content_md} />}
        </SectionWrapper>

        <SectionWrapper
          sectionKey="pastors_ask"
          variant="card-emphasized"
          className="bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/10"
        >
          {(data) => (
            <div className="text-center space-y-8 relative z-10">
              <MarkdownRenderer content={data.content_md} className="text-center" />
            </div>
          )}
        </SectionWrapper>

        <SectionWrapper
          sectionKey="pastors_next_steps"
          variant="card"
          className="bg-gradient-to-br from-primary/10 to-primary/5"
        >
          {(data) => (
            <div className="space-y-10">
              <MarkdownRenderer content={data.content_md} />
              <div className="flex justify-center pt-4">
                <Button size="lg" className="text-lg">
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
