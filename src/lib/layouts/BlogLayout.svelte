<script>
  export let title
  export let description
  export let thumbnail
</script>

<svelte:head>
  <title>{title}</title>
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={thumbnail} />
</svelte:head>

<article class="container prose prose-invert pb-12 px-6">
  <slot />
</article>
