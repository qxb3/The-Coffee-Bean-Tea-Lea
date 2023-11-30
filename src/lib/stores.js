import { writable } from 'svelte/store'
import { localStorageStore } from '@skeletonlabs/skeleton'

function createCart() {
  const { subscribe, set } = writable([])

  return {
    subscribe,
    addToCart: async (item, count, { supabase, session }) => {
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

      const { error, data } = await supabase.from('user_carts')
        .upsert({
          id: session.user.id,
          items: items
        })
        .select()

      if (error) return false

      set(data)
      return data
    }
  }
}


export const blogStore = writable()
export const cartStore = createCart()
export const purchasesStore = localStorageStore('purchaces', [])
