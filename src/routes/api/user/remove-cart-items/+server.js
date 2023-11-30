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

  const { items: itemsToDelete } = await request.json()

  if (!itemsToDelete) {
    throw error(400, {
      status: 400,
      message: 'missing "items" in body'
    })
  }

  const { data: existingCart } = await supabase
    .from('user_carts')
    .select()
    .single()

  let cartItems = existingCart?.items ?? []

  if (!cartItems) {
    throw error(404, {
      status: 404,
      message: 'There is no item to delete'
    })
  }

  cartItems = cartItems.filter(item =>
    !itemsToDelete.some(itemToDelete => item.name === itemToDelete.name)
  )

  const { error: cartErr, data } = await supabase
    .from('user_carts')
    .upsert({
      id: session.user.id,
      items: cartItems
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
