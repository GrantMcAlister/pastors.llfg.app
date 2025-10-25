"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function SamplePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="py-12 sm:py-16 bg-gradient-to-br from-primary/20 via-background to-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto bg-card/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 sm:p-12 border border-border/50">
              <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-foreground">Sample Love Letter</h1>

              <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed space-y-4">
                <p>My Beloved,</p>

                <p>
                  Do you know how I miss you? I watch the hours of your day, the way you move through each task, and my
                  heart longs for the moment you'll turn your thoughts toward Me. Not because you owe me anything, not
                  because I am lonely in some cold heaven, but because I love to hear your voice. I love it when you let
                  me near enough to share the hidden corners of your heart. You think your feelings are small, your
                  worries too trivial, but to Me they are treasures. Even the smallest sigh you release is like a ribbon
                  that ties you to Me.
                </p>

                <p>
                  I am with you in the early morning when the world is still half-asleep. I notice how sometimes you
                  hesitate to rise, wondering what weight the new day will bring. My love, you don't carry those weights
                  alone. Even before you stretch your arms, I have already stretched mine around you. You never walk
                  into a day without Me by your side.
                </p>

                <p>
                  Do you wonder if I see you when the hours feel endless, when you go about tasks that seem unnoticed by
                  everyone else? I do. I know every detail. I see you when you wipe away a quiet tear no one else will
                  notice. I see you when you laugh at something silly and quickly silence yourself because you think no
                  one would understand. But I understand. I know the depths of your heart as though I had written them
                  myself because I did.
                </p>

                <p>
                  No corner of your being is unfamiliar to Me. And there is no part of you I don't cherish. Not one
                  flaw, not one fear, not one mistake has made me love you less. On the contrary, they make me lean
                  closer still, because I long to heal what is broken and hold what feels fragile.
                </p>

                <p>
                  I know sometimes you wonder if my love is more of an idea than a reality, like a story passed down
                  from long ago. You ask yourself, "Does he really think of me now? Or is He only waiting for that
                  someday when all this is over?" Oh, if only you could see how my heart burns for you in this very
                  moment. Eternity is not some far-off day it begins now, every time you let Me into the present moment
                  of your life.
                </p>

                <p>
                  When you are lonely, I am the One reaching for your hand. When you feel unworthy, I am the One
                  whispering, "You are My delight." When you believe you've failed too many times, I am the One standing
                  by, ready to lift you again. I never grow weary of loving you. Never.
                </p>

                <p>
                  You see, you do not have to climb your way up to Me. You do not have to polish yourself or hide your
                  struggles. I am drawn to you just as you are. Like a lover gazes at the face of the one they adore, I
                  stare at you with endless delight. I cannot take my eyes off you.
                </p>

                <p>
                  So talk to me about your dreams. Please tell me what you fear. Let me sit beside you in your ordinary,
                  unremarkable moments, because they are extraordinary to me simply because you are in them. Let me be
                  your confidant, your safe place, your most actual home.
                </p>

                <p>
                  And when the night falls, when your body is tired and your thoughts run loose, I will still be here,
                  watching over you with a love that never closes its eyes. Even in your sleep, I sing songs of joy over
                  you. I am your ever-present Beloved, longing for you, delighting in you, loving you beyond measure.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
