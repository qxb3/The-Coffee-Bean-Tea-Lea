<script>
  import Item from '$lib/components/shared/Item.svelte'
  import Loading from '$lib/components/shared/Loading.svelte'

  import { getModalStore, getToastStore } from '@skeletonlabs/skeleton'
  import { cartStore, cartLoading, purchasesStore } from '$lib/stores.js'

  const modalStore = getModalStore()
  const toastStore = getToastStore()

  let cartItems = []
  cartStore.subscribe((items) => cartItems = items)

  let purchaces = []
  purchasesStore.subscribe((items) => purchaces = items)

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

  async function removeItem(item) {
    const response = await fetch('/api/user/remove-cart-items', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ items: [item] })
    })

    const result = await response.json()

    if (result.status !== 200) {
      return toastStore.trigger({
        message: result.message,
        background: 'bg-error-500'
      })
    }

    cartItems = result.items

    toastStore.trigger({
      message: 'Successfuly removed an item',
      background: 'bg-success-500'
    })
  }

  function purchase() {
    modalStore.trigger({
      type: 'component',
      component: 'purchase',
      meta: {
        selectedItems
      },
      response: async (result) => {
        if (result) {
          const response = await fetch('/api/user/remove-cart-items', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ items: selectedItems })
          })

          const result = await response.json()

          if (result.status !== 200) {
            return toastStore.trigger({
              message: result.message,
              background: 'bg-error-500'
            })
          }

          cartItems = result.items
        }
      }
    })
  }
</script>

<header>
  <title>Cart</title>
</header>

{#if purchaces.length > 0}
  <div class="bg-secondary-500 p-4">
    <div class="container text-center">
      <p>
        <span>You currently have an active orders :D Check them</span>
        <span class="link">
          <a href="/active-orders">here.</a>
        </span>
      </p>
    </div>
  </div>
{/if}

{#if $cartLoading}
  <Loading />
{:else}
  <div class="relative container p-8 space-y-12">
    {#if cartItems.length <= 0}
      <div class="text-center py-24">
        <h3 class="h3">You did not add any items yet :(</h3>
        <p>
          <span>Start carting items at</span>
          <span>
            <a class="link" href="/menu">menu.</a>
          </span>
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
{/if}
