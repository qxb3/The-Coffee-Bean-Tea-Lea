<script>
  import ProductCard from '$lib/components/shared/ProductCard.svelte'

  const topProducts = [ {
      name: 'Mocha',
      price: 120,
      image: '/coffees/mocha.png'
    },
    {
      name: 'Caramel',
      price: 220,
      image: '/coffees/caramel.png'
    },
    {
      name: 'Americano',
      price: 100,
      image: '/coffees/americano.png'
    },
    {
      name: 'Mocha',
      price: 120,
      image: '/coffees/mocha.png'
    },
    {
      name: 'Caramel',
      price: 220,
      image: '/coffees/caramel.png'
    },
    {
      name: 'Americano',
      price: 100,
      image: '/coffees/americano.png'
    },
  ].sort(() => Math.random() < 0.5 ? 1 : 0)
</script>

<div class="container py-16 px-4">
  <div class="flex items-center justify-between">
    <div>
      <h2 class="h2">Top Products</h2>
    </div>

    <div class="flex items-center justify-between gap-2">
      <input class="input" type="text" placeholder="Search product" />

      <button class="btn-icon variant-filled-secondary">
        <i class="far fa-angle-left"></i>
      </button>

      <button class="btn-icon variant-filled-secondary">
        <i class="far fa-angle-right"></i>
      </button>
    </div>
  </div>

  <div class="grid grid-cols-3 gap-4 mt-4">
    {#each topProducts as product}
      <ProductCard {...product}></ProductCard>
    {/each}
  </div>
</div>
