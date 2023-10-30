<script>
	import '../app.css'

	import { AppShell } from '@skeletonlabs/skeleton'

  import AppBar from '$lib/components/AppBar.svelte'
  import Footer from '$lib/components/Footer.svelte'
</script>

<AppShell>
  <svelte:fragment slot="pageHeader">
    <AppBar />
  </svelte:fragment>

	<slot />

  <svelte:fragment slot="pageFooter">
    <Footer />
  </svelte:fragment>
</AppShell>
