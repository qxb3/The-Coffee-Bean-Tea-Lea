<script>
  import Item from '$lib/components/shared/Item.svelte'

  const menuItems = {
    coffees: [
      {
        name: 'Espresso',
        price: 50,
        description: 'A strong and concentrated coffee made by forcing steam through finely-ground coffee beans.',
        type: 'coffee',
        img: '/coffees/espresso.png'
      },
      {
        name: 'Cappuccino',
        price: 60,
        description: 'Espresso mixed with hot milk and steamed milk foam.',
        type: 'coffee',
        img: '/coffees/cappuccino.png'
      },
      {
        name: 'Americano',
        price: 55,
        description: 'Espresso diluted with hot water, creating a milder taste than regular espresso.',
        type: 'coffee',
        img: '/coffees/americano.png'
      },
      {
        name: 'Cafe Latte',
        price: 65,
        description: 'A coffee drink made with espresso and steamed milk.',
        type: 'coffee',
        img: '/coffees/cafe-latte.png'
      },
      {
        name: 'Mocha Latte',
        price: 70,
        description: 'A coffee beverage that combines espresso with milk and chocolate.',
        type: 'coffee',
        img: '/coffees/mocha-latte.png'
      },
      {
        name: 'Vanilla Latte',
        price: 70,
        description: 'Espresso with steamed milk and vanilla syrup, topped with foamed milk.',
        type: 'coffee',
        img: '/coffees/vanilla-latte.png'
      },
      {
        name: 'Double Chocolate Latte',
        price: 75,
        description: 'A rich and indulgent coffee drink with double chocolate flavors.',
        type: 'coffee',
        img: '/coffees/double-chocolate-latte.png'
      },
      {
        name: 'Caramel Macchiatto',
        price: 70,
        description: 'Espresso with caramel syrup, steamed milk, and a caramel drizzle.',
        type: 'coffee',
        img: '/coffees/caramel-macchiatto.png'
      },
      {
        name: 'Matcha Macchiatto',
        price: 75,
        description: 'A traditional macchiato infused with the delightful flavor of matcha.',
        type: 'coffee',
        img: '/coffees/matcha-macchiatto.png'
      }
    ],
    teas: [
      {
        name: 'Lemon Chamomile',
        price: 40,
        description: 'A soothing and calming herbal tea with a hint of refreshing lemon.',
        type: 'tea',
        img: '/teas/lemon-chamomile.png'
      },
      {
        name: 'Moroccan Mint',
        price: 45,
        description: 'A traditional green tea with the refreshing taste of mint.',
        type: 'tea',
        img: '/teas/moroccan-mint.png'
      },
      {
        name: 'Apricot Ceylon',
        price: 45,
        description: 'A black tea infused with the delicate sweetness of apricot.',
        type: 'tea',
        img: '/teas/apricot-ceylon.png'
      },
      {
        name: 'English Breakfast',
        price: 50,
        description: 'A robust and flavorful black tea, perfect for breakfast.',
        type: 'tea',
        img: '/teas/english-breakfast.png'
      },
      {
        name: 'Genmaicha',
        price: 55,
        description: 'A unique Japanese green tea blended with roasted brown rice.',
        type: 'tea',
        img: '/teas/genmaicha.png'
      },
      {
        name: 'Ginseng Peppermint',
        price: 55,
        description: 'An invigorating herbal tea with the added essence of ginseng and peppermint.',
        type: 'tea',
        img: '/teas/ginseng-peppermint.png'
      },
      {
        name: 'Pomegranate Blueberry',
        price: 60,
        description: 'A delightful blend of pomegranate and blueberry flavors in a herbal tea.',
        type: 'tea',
        img: '/teas/pomegranate-blueberry.png'
      },
      {
        name: 'Jasmine Dragon Phoenix Pearl',
        price: 65,
        description: 'An exquisite jasmine tea made from hand-rolled young tea leaves.',
        type: 'tea',
        img: '/teas/jasmine-dragon-phoenix-pearl.png'
      },
      {
        name: 'Today’s Iced Tea',
        price: 60,
        description: 'A refreshing iced tea that changes daily, offering new flavors every day.',
        type: 'tea',
        img: '/teas/todays-iced-tea.png'
      }
    ],
    iceBlended: [
      {
        name: 'Mocha',
        price: 80,
        description: 'A rich and creamy blended beverage that combines coffee and chocolate.',
        type: 'iceBlended',
        img: '/ice-blended/mocha.png'
      },
      {
        name: 'Vanilla',
        price: 80,
        description: 'A smooth and sweet blended drink infused with vanilla flavor.',
        type: 'iceBlended',
        img: '/ice-blended/vanilla.png'
      },
      {
        name: 'Double Chocolate',
        price: 85,
        description: 'A decadent and indulgent blend of rich chocolate flavors.',
        type: 'iceBlended',
        img: '/ice-blended/double-chocolate.png'
      },
      {
        name: 'Caramel',
        price: 85,
        description: 'A delightful and sweet caramel-flavored blended beverage.',
        type: 'iceBlended',
        img: '/ice-blended/caramel.png'
      },
      {
        name: 'Mocha Chip',
        price: 90,
        description: 'A delicious blend of coffee, chocolate, and chocolate chips.',
        type: 'iceBlended',
        img: '/ice-blended/mocha-chip.png'
      },
      {
        name: 'Double Chocolate Chip',
        price: 90,
        description: 'A doubly indulgent treat with both double chocolate and chocolate chips.',
        type: 'iceBlended',
        img: '/ice-blended/double-chocolate-chip.png'
      },
      {
        name: 'Vanilla Chip',
        price: 95,
        description: 'A creamy and delightful blend of vanilla and chocolate chips.',
        type: 'iceBlended',
        img: '/ice-blended/vanilla-chip.png'
      },
      {
        name: 'Matcha Affogato',
        price: 95,
        description: 'A refreshing and energizing blend of matcha and ice cream.',
        type: 'iceBlended',
        img: '/ice-blended/matcha-affogato.png'
      }
    ]
  }
</script>

<header>
  <title>Menu</title>
</header>

<div class="grid gap-16 container py-16 px-8">
  <section>
    <h2 class="h2 text-center">
      <span><i class="far fa-coffee-togo"></i></span>
      <span>COFFEES</span>
    </h2>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-14">
      {#each menuItems.coffees as coffee}
        <Item {...coffee} background="!bg-secondary-900" addToCart={true} />
      {/each}
    </div>
  </section>

  <section>
    <h2 class="h2 text-center">
      <span><i class="far fa-mug-hot"></i></span>
      <span>TEAS</span>
    </h2>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-14">
      {#each menuItems.teas as tea}
        <Item {...tea} background="!bg-success-900" addToCart={true} />
      {/each}
    </div>
  </section>

  <section>
    <h2 class="h2 text-center">
      <span><i class="far fa-mug-hot"></i></span>
      <span>ICE BLENDED</span>
    </h2>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-4 mt-14">
      {#each menuItems.iceBlended as iceBlended}
        <Item {...iceBlended} background="!bg-blue-600" addToCart={true} />
      {/each}
    </div>
  </section>
</div>
