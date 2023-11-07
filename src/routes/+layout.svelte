<script>
	import '../app.css'

  // AppShell Components
  import AppBar from '$lib/components/AppBar.svelte'
  import Footer from '$lib/components/Footer.svelte'

  // Modals
  import NavBar from '$lib/components/modals/NavBar.svelte'
  import AddToCart from '$lib/components/modals/AddToCart.svelte'

  // Skeleton Imports
  import {
    AppShell,
    Modal,
    Toast,
    initializeStores
  } from '@skeletonlabs/skeleton'

  initializeStores()

  // AppBar & NavBar links
  const links = [
    { text: 'Home', path: '/', icon: 'far fa-home' },
    { text: 'Menu', path: '/menu', icon: 'far fa-scroll' },
    { text: 'About', path: '/about', icon: 'far fa-info-circle' },
    { text: 'Resources', path: '/resources', icon: 'far fa-lightbulb' }
  ]

  // Modal component modals
  const componentModalRegistry = {
    navbar: { ref: NavBar, props: { links } },
    addToCart: { ref: AddToCart }
  }
</script>

<Modal
  components={componentModalRegistry}
  position="items-start"
/>

<Toast />

<AppShell>
  <svelte:fragment slot="pageHeader">
    <AppBar {links} />
  </svelte:fragment>

	<slot />

  <svelte:fragment slot="pageFooter">
    <Footer />
  </svelte:fragment>
</AppShell>
