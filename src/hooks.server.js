import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit'
import { redirect } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'

/** @type {import('@sveltejs/kit').Handle} */
async function supabase({ event, resolve }) {
  event.locals.supabase = createSupabaseServerClient({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
    event
  })

  event.locals.getSession = async function() {
    const { data: { session } } = await event.locals.supabase.auth.getSession()
    return session
  }

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === 'content-range'
    }
  })
}

/** @type {import('@sveltejs/kit').Handle} */
export async function authorization({ event, resolve }) {
  const { route: { id } } = event

  if (id.startsWith('/(auth)')) {
    const session = await event.locals.getSession()
    if (!session) {
      throw redirect(303, '/login')
    }
  }

  return resolve(event)
}

export const handle = sequence(supabase, authorization)
