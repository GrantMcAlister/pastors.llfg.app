import { ThemeToggle } from "./theme-toggle"
import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl hover:opacity-80 transition-opacity">
            Love Letters from God
          </Link>
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}
