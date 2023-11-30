<script>
	import '../app.css'

  import { cartStore, cartLoading, purchasesStore, purchasesLoading } from '$lib/stores.js'
  import { invalidate } from '$app/navigation'
  import { onMount } from 'svelte'

  export let data

  // AppShell Components
  import AppBar from '$lib/components/AppBar.svelte'
  import Footer from '$lib/components/Footer.svelte'

  // Modals
  import NavBar from '$lib/components/modals/NavBar.svelte'
  import AddToCart from '$lib/components/modals/AddToCart.svelte'
  import Purchace from '$lib/components/modals/Purchace.svelte'

  // Skeleton Imports
  import {
    AppShell,
    Modal,
    Toast,
    initializeStores,
    getToastStore
  } from '@skeletonlabs/skeleton'

  initializeStores()

  const toastStore = getToastStore()

  let { supabase, session } = data
  $: ({ supabase, session } = data)

  onMount(async () => {
    const { data } = supabase.auth.onAuthStateChange((_, _session) => {
      if (_session?.expires_at !== session?.expires_at) invalidate('supabase:auth')
    })

    if (session) {
      await fetchCart().then(() => cartLoading.set(true))
      cartLoading.set(false)

      await fetchPurchaces()
      purchasesLoading.set(false)
    }

    return () => data.subscription.unsubscribe()
  })

  async function fetchCart() {
    const response = await fetch('/api/user/fetch-cart', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const result = await response.json()

    if (result.status !== 200) {
      return toastStore.trigger({
        message: result.message,
        background: 'bg-error-500'
      })
    }

    cartStore.set(result.items)
  }

  async function fetchPurchaces() {
    const response = await fetch('/api/user/fetch-purchaces', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const result = await response.json()

    if (result.status !== 200) {
      return toastStore.trigger({
        message: result.message,
        background: 'bg-error-500'
      })
    }

    purchasesStore.set(result.purchaces)
  }

  // AppBar & NavBar links
  const links = [
    { text: 'Home', path: '/', icon: 'far fa-home' },
    { text: 'Menu', path: '/menu', icon: 'far fa-scroll' },
    { text: 'About', path: '/about', icon: 'far fa-info-circle' },
    { text: 'Resources', path: '/resources', icon: 'far fa-lightbulb' }
  ]

  // Modal component modals
  const componentModalRegistry = {
    navbar: { ref: NavBar, props: { links, session } },
    addToCart: { ref: AddToCart },
    purchase: { ref: Purchace }
  }
</script>

<Modal
  components={componentModalRegistry}
  position="items-start"
/>

<Toast />

<AppShell>
  <svelte:fragment slot="pageHeader">
    <AppBar {links} {session} />
  </svelte:fragment>

	<slot />

  <svelte:fragment slot="pageFooter">
    <Footer />
  </svelte:fragment>
</AppShell>
