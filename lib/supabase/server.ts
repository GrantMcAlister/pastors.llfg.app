import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { env } from "@/lib/env"

export async function getSupabaseServerClient() {
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

  return client
}
