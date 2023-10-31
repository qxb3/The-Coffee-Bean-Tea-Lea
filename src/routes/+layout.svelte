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
    { text: 'Home', path: '/', icon: 'far fa-home' },
    { text: 'Menu', path: '/menu', icon: 'far fa-scroll' },
    { text: 'About', path: '/about', icon: 'far fa-info-circle' },
    { text: 'Resources', path: '/resources', icon: 'far fa-lightbulb' }
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
