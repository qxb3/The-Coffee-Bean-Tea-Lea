import { writable } from 'svelte/store'
import { localStorageStore } from '@skeletonlabs/skeleton'

export const blogStore = writable()
export const cartStore = localStorageStore('cart', [])
