<script>
  import Item from '$lib/components/shared/Item.svelte'

  const topProducts = [
    { name: 'Mocha', price: 80, description: 'A rich and creamy blended beverage that combines coffee and chocolate.', type: 'iceBlended', img: '/ice-blended/mocha.png' },
    { name: 'Vanilla', price: 80, description: 'A smooth and sweet blended drink infused with vanilla flavor.', type: 'iceBlended', img: '/ice-blended/vanilla.png' },
    { name: 'Double Chocolate', price: 85, description: 'A decadent and indulgent blend of rich chocolate flavors.', type: 'iceBlended', img: '/ice-blended/double-chocolate.png' },
    { name: 'Espresso', price: 50, description: 'A strong and concentrated coffee made by forcing steam through finely-ground coffee beans.', type: 'coffee', img: '/coffees/espresso.png' },
    { name: 'Cappuccino', price: 60, description: 'Espresso mixed with hot milk and steamed milk foam.', type: 'coffee', img: '/coffees/cappuccino.png' },
    { name: 'Americano', price: 55, description: 'Espresso diluted with hot water, creating a milder taste than regular espresso.', type: 'coffee', img: '/coffees/americano.png' },
    { name: 'Lemon Chamomile', price: 40, description: 'A soothing and calming herbal tea with a hint of refreshing lemon.', type: 'tea', img: '/teas/lemon-chamomile.png' },
    { name: 'Moroccan Mint', price: 45, description: 'A traditional green tea with the refreshing taste of mint.', type: 'tea', img: '/teas/moroccan-mint.png' },
    { name: 'Apricot Ceylon', price: 45, description: 'A black tea infused with the delicate sweetness of apricot.', type: 'tea', img: '/teas/apricot-ceylon.png' },
    { name: 'Double Chocolate Latte', price: 75, description: 'A rich and indulgent coffee drink with double chocolate flavors.', type: 'coffee', img: '/coffees/double-chocolate-latte.png' },
    { name: 'Caramel Macchiatto', price: 70, description: 'Espresso with caramel syrup, steamed milk, and a caramel drizzle.', type: 'coffee', img: '/coffees/caramel-macchiatto.png' },
    { name: 'Jasmine Dragon Phoenix Pearl', price: 65, description: 'An exquisite jasmine tea made from hand-rolled young tea leaves.', type: 'tea', img: '/teas/jasmine-dragon-phoenix-pearl.png' },
    { name: 'Today’s Iced Tea', price: 60, description: 'A refreshing iced tea that changes daily, offering new flavors every day.', type: 'tea', img: '/teas/todays-iced-tea.png' },
    { name: 'Vanilla Chip', price: 95, description: 'A creamy and delightful blend of vanilla and chocolate chips.', type: 'iceBlended', img: '/ice-blended/vanilla-chip.png' },
    { name: 'Matcha Affogato', price: 95, description: 'A refreshing and energizing blend of matcha and ice cream.', type: 'iceBlended', img: '/ice-blended/matcha-affogato.png' },
    { name: 'Matcha Macchiatto', price: 75, description: 'A traditional macchiato infused with the delightful flavor of matcha.', type: 'coffee', img: '/coffees/matcha-macchiatto.png' }
  ]

  let topProductsPage = 0
  const topProductsLimit = 8
  const lastPage = Math.ceil(topProducts.length / topProductsLimit) - 1

  $: topProductsPaginated = topProducts.slice(
    topProductsPage * topProductsLimit,
    topProductsPage * topProductsLimit + topProductsLimit
  )

  $: inFirstPage = topProductsPage <= 0
  $: inLastPage = topProductsPage >= lastPage

  function topProductsPrev() {
    if (inFirstPage) return

    topProductsPage = topProductsPage - 1
  }

  function topProductsNext() {
    if (inLastPage) return

    topProductsPage = topProductsPage + 1
  }
</script>

<div class="container py-16 px-4">
  <div class="flex flex-col md:flex-row items-center justify-between">
    <div>
      <h2 class="h2">Top Products</h2>
    </div>

    <div class="flex items-center justify-between gap-2 mt-2 md:mt-0">
      <input class="input" type="text" placeholder="Search product" />

      <button on:click={topProductsPrev} disabled={inFirstPage} class="btn-icon variant-filled-secondary">
        <i class="far fa-angle-left"></i>
      </button>

      <button on:click={topProductsNext} disabled={inLastPage} class="btn-icon variant-filled-secondary">
        <i class="far fa-angle-right"></i>
      </button>
    </div>
  </div>

  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-4 md:gap-8 mt-14">
    {#each topProductsPaginated as product}
      <Item {...product} addToCart={true} />
    {/each}
  </div>
</div>
