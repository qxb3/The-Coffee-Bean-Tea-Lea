import { json, error } from '@sveltejs/kit'

/** @type {import('./$types').RequestHandler} */
export async function GET({ locals: { supabase, getSession } }) {
  const session = await getSession()

  if (!session) {
    throw error(401, {
      status: 401,
      message: 'Not logged in'
    })
  }

  const { error: cartErr, data } = await supabase
    .from('user_carts')
    .select()
    .single()

  if (cartErr) {
    throw error(500, {
      status: 500,
      message: 'Something went wrong fething cart...'
    })
  }

  return json({
    status: 200,
    ...data
  })
}
