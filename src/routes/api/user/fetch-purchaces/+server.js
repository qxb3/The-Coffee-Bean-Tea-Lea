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

  const { error: purchaceErr, data } = await supabase
    .from('user_purchaces')
    .select()

  if (purchaceErr) {
    throw error(500, {
      status: 500,
      message: 'Something went wrong in fetching purchaces...'
    })
  }

  return json({
    status: 200,
    purchaces: data
  })
}
