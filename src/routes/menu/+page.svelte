<script>
  import { getModalStore } from '@skeletonlabs/skeleton'

  const modalStore = getModalStore()

  const menuItems = {
    coffeesImgPath: '/coffees',
    teasImgPath: '/teas',
    iceBlendedImgPath: '/ice-blended',
    coffees: [
      { name: 'Espresso', price: 50, description: 'A strong and concentrated coffee made by forcing steam through finely-ground coffee beans.', type: 'coffee', img: '/espresso.png' },
      { name: 'Cappuccino', price: 60, description: 'Espresso mixed with hot milk and steamed milk foam.', type: 'coffee', img: '/cappuccino.png' },
      { name: 'Americano', price: 55, description: 'Espresso diluted with hot water, creating a milder taste than regular espresso.', type: 'coffee', img: '/americano.png' },
      { name: 'Cafe Latte', price: 65, description: 'A coffee drink made with espresso and steamed milk.', type: 'coffee', img: '/cafe-latte.png' },
      { name: 'Mocha Latte', price: 70, description: 'A coffee beverage that combines espresso with milk and chocolate.', type: 'coffee', img: '/mocha-latte.png' },
      { name: 'Vanilla Latte', price: 70, description: 'Espresso with steamed milk and vanilla syrup, topped with foamed milk.', type: 'coffee', img: '/vanilla-latte.png' },
      { name: 'Double Chocolate Latte', price: 75, description: 'A rich and indulgent coffee drink with double chocolate flavors.', type: 'coffee', img: '/double-chocolate-latte.png' },
      { name: 'Caramel Macchiatto', price: 70, description: 'Espresso with caramel syrup, steamed milk, and a caramel drizzle.', type: 'coffee', img: '/caramel-macchiatto.png' },
      { name: 'Matcha Macchiatto', price: 75, description: 'A traditional macchiato infused with the delightful flavor of matcha.', type: 'coffee', img: '/matcha-macchiatto.png' }
    ],
    teas: [
      { name: 'Lemon Chamomile', price: 40, description: 'A soothing and calming herbal tea with a hint of refreshing lemon.', type: 'tea', img: '/lemon-chamomile.png' },
      { name: 'Moroccan Mint', price: 45, description: 'A traditional green tea with the refreshing taste of mint.', type: 'tea', img: '/moroccan-mint.png' },
      { name: 'Apricot Ceylon', price: 45, description: 'A black tea infused with the delicate sweetness of apricot.', type: 'tea', img: '/apricot-ceylon.png' },
      { name: 'English Breakfast', price: 50, description: 'A robust and flavorful black tea, perfect for breakfast.', type: 'tea', img: '/english-breakfast.png' },
      { name: 'Genmaicha', price: 55, description: 'A unique Japanese green tea blended with roasted brown rice.', type: 'tea', img: '/genmaicha.png' },
      { name: 'Ginseng Peppermint', price: 55, description: 'An invigorating herbal tea with the added essence of ginseng and peppermint.', type: 'tea', img: '/ginseng-peppermint.png' },
      { name: 'Pomegranate Blueberry', price: 60, description: 'A delightful blend of pomegranate and blueberry flavors in a herbal tea.', type: 'tea', img: '/pomegranate-blueberry.png' },
      { name: 'Jasmine Dragon Phoenix Pearl', price: 65, description: 'An exquisite jasmine tea made from hand-rolled young tea leaves.', type: 'tea', img: '/jasmine-dragon-phoenix-pearl.png' },
      { name: 'Today’s Iced Tea', price: 60, description: 'A refreshing iced tea that changes daily, offering new flavors every day.', type: 'tea', img: '/todays-iced-tea.png' }
    ],
    iceBlended: [
      { name: 'Mocha', price: 80, description: 'A rich and creamy blended beverage that combines coffee and chocolate.', type: 'iceBlended', img: '/mocha.png' },
      { name: 'Vanilla', price: 80, description: 'A smooth and sweet blended drink infused with vanilla flavor.', type: 'iceBlended', img: '/vanilla.png' },
      { name: 'Double Chocolate', price: 85, description: 'A decadent and indulgent blend of rich chocolate flavors.', type: 'iceBlended', img: '/double-chocolate.png' },
      { name: 'Caramel', price: 85, description: 'A delightful and sweet caramel-flavored blended beverage.', type: 'iceBlended', img: '/caramel.png' },
      { name: 'Mocha Chip', price: 90, description: 'A delicious blend of coffee, chocolate, and chocolate chips.', type: 'iceBlended', img: '/mocha-chip.png' },
      { name: 'Double Chocolate Chip', price: 90, description: 'A doubly indulgent treat with both double chocolate and chocolate chips.', type: 'iceBlended', img: '/double-chocolate-chip.png' },
      { name: 'Vanilla Chip', price: 95, description: 'A creamy and delightful blend of vanilla and chocolate chips.', type: 'iceBlended', img: '/vanilla-chip.png' },
      { name: 'Matcha Affogato', price: 95, description: 'A refreshing and energizing blend of matcha and ice cream.', type: 'iceBlended', img: '/matcha-affogato.png' }
    ]
  }

  function openItemPopup(item, imgPath) {
    modalStore.trigger({
      type: 'component',
      component: 'itemPopup',
      modalClasses: 'items-end',
      meta: { item, imgPath }
    })
  }
</script>

<div class="grid gap-16 container py-16 px-8">
  <section>
    <h2 class="h2 text-center">
      <span><i class="far fa-coffee-togo"></i></span>
      <span>COFFEES</span>
    </h2>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-14">
      {#each menuItems.coffees as coffee}
        <button on:click={() => openItemPopup(coffee, menuItems.coffeesImgPath)} class="card card-hover !bg-secondary-900 p-4 divide-y">
          <div class="flex items-center justify-center pb-4">
            <img class="w-full max-h-[6rem] object-contain" src={menuItems.coffeesImgPath + coffee.img} alt={coffee.name}>
          </div>

          <div class="pt-4 text-start">
            <h2 class="h2">₱ {coffee.price}</h2>
            <h3 class="h3">{coffee.name}</h3>
          </div>
        </button>
      {/each}
    </div>
  </section>

  <section>
    <h2 class="h2 text-center">
      <span><i class="far fa-mug-hot"></i></span>
      <span>TEAS</span>
    </h2>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-14">
      {#each menuItems.teas as tea}
        <button on:click={() => openItemPopup(tea, menuItems.teasImgPath)} class="card card-hover !bg-success-900 p-4 divide-y">
          <div class="flex items-center justify-center pb-4">
            <img class="w-full max-h-[6rem] object-contain" src={menuItems.teasImgPath + tea.img} alt={tea.name}>
          </div>

          <div class="pt-4 text-start">
            <h2 class="h2">₱ {tea.price}</h2>
            <h3 class="h3">{tea.name}</h3>
          </div>
        </button>
      {/each}
    </div>
  </section>

  <section>
    <h2 class="h2 text-center">
      <span><i class="far fa-mug-hot"></i></span>
      <span>ICE BLENDED</span>
    </h2>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-14">
      {#each menuItems.iceBlended as iceBlended}
        <button on:click={() => openItemPopup(iceBlended, menuItems.iceBlendedImgPath)} class="card card-hover !bg-blue-600 p-4 divide-y">
          <div class="flex items-center justify-center pb-4">
            <img class="w-full max-h-[6rem] object-contain" src={menuItems.iceBlendedImgPath + iceBlended.img} alt={iceBlended.name}>
          </div>

          <div class="pt-4 text-start">
            <h2 class="h2">₱ {iceBlended.price}</h2>
            <h3 class="h3">{iceBlended.name}</h3>
          </div>
        </button>
      {/each}
    </div>
  </section>
</div>
