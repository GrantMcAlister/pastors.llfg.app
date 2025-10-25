export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Love Letters from God. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            A{" "}
            <a
              href="https://grantmcalister.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors underline"
            >
              GrantMcAlister
            </a>{" "}
            project
          </p>
        </div>
      </div>
    </footer>
  )
}
