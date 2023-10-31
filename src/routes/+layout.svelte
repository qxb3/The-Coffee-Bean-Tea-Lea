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

  const componentModalRegistry = {
    navbar: { ref: NavBar }
  }
</script>

<Modal
  components={componentModalRegistry}
  position="items-start"
/>

<AppShell>
  <svelte:fragment slot="pageHeader">
    <AppBar />
  </svelte:fragment>

	<slot />

  <svelte:fragment slot="pageFooter">
    <Footer />
  </svelte:fragment>
</AppShell>
