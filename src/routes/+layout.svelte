<script>
	import '../app.css'

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
    initializeStores
  } from '@skeletonlabs/skeleton'

  initializeStores()

  let { supabase, session } = data
  $: ({ supabase, session } = data)

  onMount(() => {
    const { data } = supabase.auth.onAuthStateChange((_, _session) => {
      if (_session?.expires_at !== session?.expires_at) invalidate('supabase:auth')
    })

    return () => data.subscription.unsubscribe()
  })


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
