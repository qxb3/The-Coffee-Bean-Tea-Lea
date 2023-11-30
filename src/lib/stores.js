import { writable } from 'svelte/store'

export const blogStore = writable()

export const cartStore = writable([])
export const cartLoading = writable(true)

export const purchasesStore = writable([])
export const purchasesLoading = writable(true)
