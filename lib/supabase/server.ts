import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { env } from "@/lib/env"

export async function getSupabaseServerClient() {
  console.log("[v0] Creating Supabase server client...")
  console.log("[v0] URL:", env.supabase.url ? "present" : "missing")
  console.log("[v0] Anon Key:", env.supabase.anonKey ? "present" : "missing")

  const cookieStore = await cookies()

  const client = createServerClient(env.supabase.url, env.supabase.anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  })

  console.log("[v0] Supabase server client created successfully")
  return client
}
