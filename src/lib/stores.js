import { writable } from 'svelte/store'

export const blogStore = writable()
export const cartStore = writable([])
export const purchasesStore = writable([])
