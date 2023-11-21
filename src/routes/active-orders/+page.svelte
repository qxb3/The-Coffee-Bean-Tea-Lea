<script>
  import { purchasesStore } from '$lib/stores.js'
</script>

<div class="container py-8 px-4">
  {#if $purchasesStore.length <= 0}
    <div class="text-center py-24">
      <h3 class="h3">You have not order anything yet :(</h3>
      <p>
        <span>Check your</span>
        <span class="underline text-success-500">
          <a href="/cart">cart</a>
        </span>
        <span>and start purchasing! :D</span>
      </p>
    </div>
  {/if}

  <div class="space-y-12">
    {#each $purchasesStore as purchase}
      <div>
        <h2 class="h2 mb-4">
          <span>•</span>
          <span class="underline underline-offset-4 ml-1">Order ID: {purchase.id}</span>
        </h2>

        {#each purchase.items as item}
          <div class="ml-4 grid grid-cols-3 py-2">
            <div class="flex gap-4 items-center">
              <img class="aspect-square w-12" src={item.img} alt={item.name} />

              <div>
                <p class="h4 space-x-2 line-clamp-1">
                  <span>{item.name}</span>
                  <span class="text-tertiary-700">x{item.count}</span>
                </p>
                <p class="h4">₱ {item.price}</p>
              </div>
            </div>

            <h1 class="h1 text-center">=</h1>

            <h2 class="h2">₱ {item.price * item.count}</h2>
          </div>
        {/each}

        <div class="grid grid-cols-3 ml-4">
          <div></div>
          <h1 class="h1 text-center">=</h1>
          <h2 class="h2">₱ {purchase.totalPrice} (Total)</h2>
        </div>
      </div>
    {/each}
  </div>
</div>
