<script>
  const menuItems = {
    coffees: [
      { name: 'Espresso', price: 50 },
      { name: 'Cappuccino', price: 60 },
      { name: 'Americano', price: 55 },
      { name: 'Café Latte', price: 65 },
      { name: 'Mocha Latte', price: 70 },
      { name: 'Vanilla Latte', price: 70 },
      { name: 'Double Chocolate Latte', price: 75 },
      { name: 'Caramel Macchiatto', price: 70 },
      { name: 'Matcha Macchiatto', price: 75 }
    ],
    teas: [
      { name: 'Lemon Chamomile', price: 40 },
      { name: 'Moroccan Mint', price: 45 },
      { name: 'Apricot Ceylon', price: 45 },
      { name: 'English Breakfast', price: 50 },
      { name: 'Genmaicha', price: 55 },
      { name: 'Ginseng Peppermint', price: 55 },
      { name: 'Pomegranate Blueberry', price: 60 },
      { name: 'Jasmine Dragon Phoenix Pearl', price: 65 },
      { name: 'Today’s Iced Tea', price: 60 }
    ],
    ice_blended: [
      { name: 'Mocha', price: 80 },
      { name: 'Vanilla', price: 80 },
      { name: 'Double Chocolate', price: 85 },
      { name: 'Caramel', price: 85 },
      { name: 'Mocha Chip', price: 90 },
      { name: 'Double Chocolate Chip', price: 90 },
      { name: 'Vanilla Chip', price: 95 },
      { name: 'Matcha Affogato', price: 95 }
    ],
    non_drinks: []
  }
</script>

<div class="container grid grid-cols-1 xl:grid-cols-2 gap-8 py-16 px-8">
  <div>
    <div class="flex items-center gap-3">
      <i class="far fa-coffee-togo fa-3x"></i>
      <h2 class="h2 underline">COFFEES</h2>
    </div>
    <div class="grid grid-cols-3 gap-x-4 mt-4">
      {#each menuItems.coffees as coffee}
        <p>• {coffee.name}</p>
        <div class="grid items-center">
          <div class="w-full h-1 bg-primary-500 rounded"></div>
        </div>
        <p>₱ {coffee.price}</p>
      {/each}
    </div>
  </div>

  <div>
    <div class="flex items-center gap-3">
      <i class="far fa-mug-hot fa-3x"></i>
      <h2 class="h2 underline">TEAS</h2>
    </div>
    <div class="grid grid-cols-3 gap-x-4 mt-4">
      {#each menuItems.teas as tea}
        <p>• {tea.name}</p>
        <div class="grid items-center">
          <div class="w-full h-1 bg-primary-500 rounded"></div>
        </div>
        <p>₱ {tea.price}</p>
      {/each}
    </div>
  </div>

  <div>
    <div class="flex items-center gap-3">
      <i class="far fa-glass-whiskey-rocks fa-3x"></i>
      <h2 class="h2 underline">ICE BLENDED</h2>
    </div>
    <div class="grid grid-cols-3 gap-x-4 mt-4">
      {#each menuItems.ice_blended as iceBlended}
        <p>• {iceBlended.name}</p>
        <div class="grid items-center">
          <div class="w-full h-1 bg-primary-500 rounded"></div>
        </div>
        <p>₱ {iceBlended.price}</p>
      {/each}
    </div>
  </div>
</div>
