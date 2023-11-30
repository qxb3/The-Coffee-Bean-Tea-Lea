import { json, error } from '@sveltejs/kit'

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, locals: { supabase, getSession } }) {
  const session = await getSession()

  if (!session) {
    throw error(401, {
      status: 401,
      message: 'Not logged in'
    })
  }

  const { selectedItems } = await request.json()

  if (!selectedItems) {
    throw error(400, {
      status: 400,
      message: 'missing "selectedItems" in body'
    })
  }

  const id = [...Array(16)].map(() => Math.random().toString(36)[2]).join('')
  const prices = selectedItems.map(item => item.price * item.count)
  const totalPrice = prices.reduce((acc, current) => acc + current, 0)

  const { error: purchaceErr, data } = await supabase
    .from('user_purchaces')
    .insert({
      id,
      userId: session.user.id,
      items: selectedItems,
      totalPrice
    })
    .select()
    .single()

  if (purchaceErr) {
    throw error(500, {
      status: 500,
      message: 'Something went wrong in purchasing...'
    })
  }

  return json({
    status: 200,
    ...data
  })
}
