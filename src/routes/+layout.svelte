<script>
	import '../app.css'

  import AppBar from '$lib/components/AppBar.svelte'
  import NavBar from '$lib/components/modals/NavBar.svelte'
  import Footer from '$lib/components/Footer.svelte'

  import {
    AppShell,
    Modal,
    initializeStores
  } from '@skeletonlabs/skeleton'

  initializeStores()

  const links = [
    { text: 'Home', path: '/' },
    { text: 'Menu', path: '/menu' },
    { text: 'About', path: '/about' },
    { text: 'Resources', path: '/resources' }
  ]

  const componentModalRegistry = {
    navbar: { ref: NavBar, props: { links } }
  }
</script>

<Modal
  components={componentModalRegistry}
  position="items-start"
/>

<AppShell>
  <svelte:fragment slot="pageHeader">
    <AppBar {links} />
  </svelte:fragment>

	<slot />

  <svelte:fragment slot="pageFooter">
    <Footer />
  </svelte:fragment>
</AppShell>
