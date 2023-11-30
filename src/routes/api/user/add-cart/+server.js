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

  const { item, count} = await request.json()

  const { data: existingCart } = await supabase
    .from('user_carts')
    .select()
    .single()

  const items = existingCart?.items ?? []

  if (items) {
    const index = items.findIndex(v => v.name === item.name)

    if (index !== -1) items[index].count = (items[index].count || 0) + count // If item exist in the array increase the count
    else items.push({ ...item, count }) // Else push a new item
  }

  const { error: cartErr, data } = await supabase.from('user_carts')
    .upsert({
      id: session.user.id,
      items: items
    })
    .select()
    .single()

  if (cartErr) {
    throw error(500, {
      status: 500,
      message: 'Something went wrong...'
    })
  }

  return json({
    status: 200,
    ...data
  })
}
