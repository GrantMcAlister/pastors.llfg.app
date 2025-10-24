"use client"

interface VideoEmbedProps {
  videoUrl?: string
  className?: string
}

export function VideoEmbed({ videoUrl, className = "" }: VideoEmbedProps) {
  if (!videoUrl) {
    return (
      <div className={`aspect-video bg-muted rounded-lg flex items-center justify-center ${className}`}>
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className="text-muted-foreground">Video Coming Soon</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`aspect-video ${className}`}>
      <video width="100%" height="100%" controls className="rounded-lg w-full h-full object-cover">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
