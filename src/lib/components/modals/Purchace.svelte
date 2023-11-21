<script>
  import { getModalStore, getToastStore } from '@skeletonlabs/skeleton'
  import { purchasesStore } from '$lib/stores.js'

  const modalStore = getModalStore()
  const toastStore = getToastStore()

  const { selectedItems } = $modalStore[0].meta

  const prices = selectedItems.map(item => item.price * item.count)
  const totalPrice = prices.reduce((acc, current) => acc + current, 0)

  function confirmPurchase() {
    const randomID = [...Array(16)].map(() => Math.random().toString(36)[2]).join('')

    purchasesStore.update((items) => [...items, {
      id: randomID,
      totalPrice,
      items: selectedItems
    }])

    $modalStore[0].response(true)
    modalStore.close()
    toastStore.trigger({
      message: 'Successfuly Purchased!',
      background: 'variant-filled-success'
    })
  }
</script>

<div class="card bg-surface-900 p-4 w-full max-w-screen-md">
  <!-- Work around for auto focus thing in navbar -->
  <button class="absolute top-[-999rem]"></button>

  <h2 class="h2 underline">Confirm Purchase</h2>

  <div class="divide-y mt-8">
    {#each selectedItems as item}
      <div class="grid grid-cols-3 py-5">
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
  </div>

  <div class="grid grid-cols-3">
    <div></div>
    <h1 class="h1 text-center">=</h1>
    <h2 class="h2">₱ {totalPrice} (Total)</h2>
  </div>

  <div class="flex items-center justify-end gap-4 mt-8">
    <button on:click={() => modalStore.close()} class="btn btn-lg variant-filled-error">Cancel</button>
    <button on:click={confirmPurchase} class="btn btn-lg variant-filled-success">Purchase</button>
  </div>
</div>
