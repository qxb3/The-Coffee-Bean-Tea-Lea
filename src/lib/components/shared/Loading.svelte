<script>
  export let py = "py-32"
  export let background = "bg-white"
</script>

<div class={py}>
  <h1 class="h1 text-center">Loading...</h1>
  <div class="flex items-center justify-center gap-4 mt-8">
    <span class='h-8 w-8 {background} rounded-full animate-bounce [animation-delay:-0.3s]'></span>
    <span class='h-8 w-8 {background} rounded-full animate-bounce [animation-delay:-0.15s]'></span>
    <span class='h-8 w-8 {background} rounded-full animate-bounce'></span>
  </div>
</div>
