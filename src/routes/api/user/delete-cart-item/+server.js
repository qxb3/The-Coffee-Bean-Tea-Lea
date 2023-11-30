import { json, error } from '@sveltejs/kit'

/** @type {import('./$types').RequestHandler} */
export async function DELETE({ request, locals: { supabase, getSession } }) {
  const session = await getSession()

  if (!session) {
    throw error(401, {
      status: 401,
      message: 'Not logged in'
    })
  }

  const { item } = await request.json()

  const { data: existingCart } = await supabase
    .from('user_carts')
    .select()
    .single()

  let items = existingCart?.items ?? []

  if (!items) {
    throw error(404, {
      status: 404,
      message: 'There is no item to delete'
    })
  }

  items = items.filter((v) => v.name !== item.name)

  const { error: cartErr, data } = await supabase
    .from('user_carts')
    .upsert({
      id: session.user.id,
      items: items
    })
    .select()
    .single()

  if (cartErr) {
    throw error(500, {
      status: 500,
      message: 'Something went wrong removing an item into cart...'
    })
  }

  return json({
    status: 200,
    ...data
  })
}
