<script>
  export let name
  export let price
  export let image
</script>

<div class="flex relative card !bg-primary-900 items-center gap-8 p-4">
  <button class="btn !bg-transparent absolute right-0 top-2">
    <i class="fas fa-cart-plus fa-lg"></i>
  </button>

  <div>
    <img class="w-24" src={image} alt={name} />
  </div>

  <div>
    <h1 class="h2">₱ {price}</h1>
    <h3 class="h4">{name}</h3>
  </div>
</div>
