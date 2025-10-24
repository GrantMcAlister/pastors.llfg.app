export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Love Letters from God. All rights reserved.
          </p>
          <a
            href="mailto:contact@llfg.app"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  )
}
