<script>
  import Item from '$lib/components/shared/Item.svelte'
  import { getModalStore } from '@skeletonlabs/skeleton'
  import { cartStore } from '$lib/stores.js'

  const modalStore = getModalStore()

  let cartItems = $cartStore
  $: coffees = cartItems?.filter((item) => item.type === "coffee")
  $: teas = cartItems?.filter((item) => item.type === "tea")
  $: iceBlended = cartItems?.filter((item) => item.type === "iceBlended")
  $: cartStore.set(cartItems)

  let isSelectAll = false
  $: isAllCoffees = isSelectAll ?? false
  $: isAllTeas = isSelectAll ?? false
  $: isAllIceBlended = isSelectAll ?? false

  let selectedItems = []

  function addItem(event, item) {
    if (event.target.checked)
      selectedItems = [...selectedItems, item]
    else
      selectedItems = selectedItems.filter(v => v.name !== item.name)
  }

  function removeItem(item) {
    cartItems = cartItems.filter((v) => v.name !== item.name)
  }

  function clearCart() {
    modalStore.trigger({
      type: 'confirm',
      title: 'Please Confirm',
      body: 'Are you sure to clear cart?',
      response: (r) => {
        if (r) cartItems = []
      }
    })
  }
</script>

<div class="container p-8 space-y-12">
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
      <div class="flex items-center space-x-2">
        <input bind:checked={isAllCoffees} class="checkbox" type="checkbox" />

        <h3 class="h3">
          <span><i class="far fa-coffee-togo"></i></span>
          <span>COFFEES</span>
        </h3>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
        {#each coffees as coffee}
          <Item {...coffee}>
            <div class="flex items-center justify-between p-4" slot="heading">
              <input on:change={(e) => addItem(e, coffee)} checked={isAllCoffees} class="checkbox" type="checkbox" />
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
      <div class="flex items-center space-x-2">
        <input bind:checked={isAllTeas} class="checkbox" type="checkbox" />

        <h3 class="h3">
          <span><i class="far fa-mug-hot"></i></span>
          <span>TEAS</span>
        </h3>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
        {#each teas as tea}
          <Item {...tea}>
            <div class="flex items-center justify-between p-4" slot="heading">
              <input on:change={(e) => addItem(e, tea)} checked={isAllTeas} class="checkbox" type="checkbox" />
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
      <div class="flex items-center space-x-2">
        <input bind:checked={isAllIceBlended} class="checkbox" type="checkbox" />

        <h3 class="h3">
          <span><i class="far fa-mug-hot"></i></span>
          <span>ICE BLENDED</span>
        </h3>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
        {#each iceBlended as blended}
          <Item {...blended}>
            <div class="flex items-center justify-between p-4" slot="heading">
              <input on:change={(e) => addItem(e, blended)} checked={isAllIceBlended} class="checkbox" type="checkbox" />
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

  <div class="card flex items-center justify-between p-4">
    <div class="flex items-center space-x-4">
      <label>
        <input bind:checked={isSelectAll} type="checkbox">
        <span>Select All</span>
      </label>
      <button on:click={clearCart} class="btn btn-sm variant-filled-error">Clear Cart</button>
    </div>

    <div class="flex-1 px-24">
      <button class="btn variant-filled-success w-full">Purchace</button>
    </div>

    <div class="text-center">
      <p>Total (0 item): <span class="h2 text-error-500">₱0</span></p>
    </div>
  </div>
</div>
