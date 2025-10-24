console.log("[v0] Environment variable check:")
console.log("[v0] SUPABASE_URL:", process.env.SUPABASE_URL ? "defined" : "undefined")
console.log("[v0] SUPABASE_ANON_KEY:", process.env.SUPABASE_ANON_KEY ? "defined" : "undefined")
console.log("[v0] NEXT_PUBLIC_SUPABASE_URL:", process.env.NEXT_PUBLIC_SUPABASE_URL ? "defined" : "undefined")
console.log("[v0] NEXT_PUBLIC_SUPABASE_ANON_KEY:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "defined" : "undefined")

export const env = {
  supabase: {
    url: process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    anonKey: process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
  },
}

console.log("[v0] Resolved env.supabase.url:", env.supabase.url ? "has value" : "empty")
console.log("[v0] Resolved env.supabase.anonKey:", env.supabase.anonKey ? "has value" : "empty")
