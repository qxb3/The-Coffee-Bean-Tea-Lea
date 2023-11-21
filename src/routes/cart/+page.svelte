<script>
  import Item from '$lib/components/shared/Item.svelte'
  import { getModalStore } from '@skeletonlabs/skeleton'
  import { cartStore, purchasesStore } from '$lib/stores.js'

  const modalStore = getModalStore()

  let cartItems = $cartStore
  $: coffees = cartItems?.filter((item) => item.type === "coffee")
  $: teas = cartItems?.filter((item) => item.type === "tea")
  $: iceBlended = cartItems?.filter((item) => item.type === "iceBlended")
  $: cartStore.set(cartItems)

  let selectedItems = []
  let selectedItemsTotalPrice = 0

  $: {
    const prices = selectedItems.map(item => item.price * item.count)
    selectedItemsTotalPrice = prices.reduce((acc, current) => acc + current, 0)
  }

  function removeItem(item) {
    cartItems = cartItems.filter((v) => v.name !== item.name)
  }

  function purchase() {
    modalStore.trigger({
      type: 'component',
      component: 'purchase',
      meta: {
        selectedItems
      },
      response: (confirmPurchase) => {
        if (confirmPurchase) {
          cartItems = cartItems.filter(item => !selectedItems.some(selectedItem => item.name === selectedItem.name))
        }
      }
    })
  }
</script>

{#if $purchasesStore.length > 0}
  <div class="bg-secondary-500 p-4">
    <div class="container text-center">
      <p>
        <span>You currently have an active orders :D Check them</span>
        <span class="underline">
          <a href="/active-orders">here.</a>
        </span>
      </p>
    </div>
  </div>
{/if}

<div class="relative container p-8 space-y-12">
  {#if coffees.length <= 0 && teas.length <= 0 && iceBlended.length <= 0}
    <div class="text-center py-24">
      <h3 class="h3">You did not add any items yet :(</h3>
      <p>
        <span>Start carting items at</span>
        <a class="underline text-success-500" href="/menu">menu.</a>
      </p>
    </div>
  {/if}

  {#if coffees.length > 0}
    <div>
      <h3 class="h3">
        <span><i class="far fa-coffee-togo"></i></span>
        <span>COFFEES</span>
      </h3>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
        {#each coffees as coffee}
          <Item {...coffee}>
            <div class="flex items-center justify-between p-4" slot="heading">
              <input bind:group={selectedItems} value={coffee} class="checkbox" type="checkbox" />
              <p class="text-tertiary-700">x{coffee.count}</p>
            </div>

            <div class="px-4 pb-4" slot="footer">
              <button on:click={() => removeItem(coffee)} class="btn rounded-md variant-filled-error w-full">Remove</button>
            </div>
          </Item>
        {/each}
      </div>
    </div>
  {/if}

  {#if teas.length > 0}
    <div>
      <h3 class="h3">
        <span><i class="far fa-mug-hot"></i></span>
        <span>TEAS</span>
      </h3>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
        {#each teas as tea}
          <Item {...tea}>
            <div class="flex items-center justify-between p-4" slot="heading">
              <input bind:group={selectedItems} value={tea} class="checkbox" type="checkbox" />
              <p class="text-tertiary-700">x{tea.count}</p>
            </div>

            <div class="px-4 pb-4" slot="footer">
              <button on:click={() => removeItem(tea)} class="btn rounded-md variant-filled-error w-full">Remove</button>
            </div>
          </Item>
        {/each}
      </div>
    </div>
  {/if}

  {#if iceBlended.length > 0}
    <div>
      <h3 class="h3">
        <span><i class="far fa-mug-hot"></i></span>
        <span>ICE BLENDED</span>
      </h3>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
        {#each iceBlended as blended}
          <Item {...blended}>
            <div class="flex items-center justify-between p-4" slot="heading">
              <input bind:group={selectedItems} value={blended} class="checkbox" type="checkbox" />
              <p class="text-tertiary-700">x{blended.count}</p>
            </div>

            <div class="px-4 pb-4" slot="footer">
              <button on:click={() => removeItem(blended)} class="btn rounded-md variant-filled-error w-full">Remove</button>
            </div>
          </Item>
        {/each}
      </div>
    </div>
  {/if}

  <div class="sticky bottom-8 card p-2 sm:p-4 w-full md:w-fit mx-auto md:ml-auto md:mx-0">
    <div class="flex justify-around gap-8 items-center">
      <div class="text-center">
        <p class="h3 line-clamp-1">
          <span>Total</span>
          <span>({selectedItems.length} item):</span>
          <span class="h2 text-error-500">₱{selectedItemsTotalPrice}</span>
        </p>
      </div>
      <button on:click={purchase} disabled={selectedItems.length <= 0} class="btn variant-filled-success">Purchace</button>
    </div>
  </div>
</div>
