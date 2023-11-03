<script>
  import { onMount, onDestroy } from 'svelte'
  import { blogStore } from '$lib/stores.js'

  export let data
  const { blog } = data

  onMount(() => {
    blogStore.set(blog.metadata)
  })

  onDestroy(() => {
    blogStore.set()
  })
</script>

<svelte:component this={blog.default} />
