"use client"

interface VideoEmbedProps {
  videoId?: string
  placeholder?: boolean
  className?: string
}

export function VideoEmbed({ videoId, placeholder = true, className = "" }: VideoEmbedProps) {
  if (placeholder || !videoId) {
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
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg"
      />
    </div>
  )
}
