<script>
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'
  import { getModalStore, getToastStore } from '@skeletonlabs/skeleton'
  import { cartStore } from '$lib/stores.js'

  const { session } = $page.data

  const modalStore = getModalStore()
  const toastStore = getToastStore()

  const { item } = $modalStore[0].meta
  let count = 1

  $: item.count = count

  function closeAddToCart() {
    modalStore.close()
  }

  async function addToCart() {
    if (!session) {
      closeAddToCart()
      toastStore.trigger({
        message: 'You need to login first',
        background: 'bg-error-500'
      })

      return goto('/login')
    }

    const response = await fetch('/api/user/add-cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ item, count })
    })

    const result = await response.json()

    if (result.status !== 200) {
      return toastStore.trigger({
        message: result.message,
        error: 'bg-error-500'
      })
    }

    cartStore.set(result.items)
    closeAddToCart()

    toastStore.trigger({
      message: 'Added to cart!',
      background: 'variant-filled-success'
    })
  }
</script>

<div class="relative card bg-surface-900 p-4 max-w-screen-md">
  <!-- Work around for auto focus thing in navbar -->
  <button class="absolute top-[-999rem]"></button>

  <button on:click={closeAddToCart} class="btn btn-icon-sm absolute top-4 right-4">
    <i class="fa fa-times"></i>
  </button>

  <div class="flex flex-col md:flex-row items-center gap-6">
    <div class="grid items-center mt-8 md:mt-0">
      <img class="w-full max-h-[10rem]" src={item.img} alt={item.name}>
    </div>

    <div class="mt-8">
      <h2 class="h1">{item.name}</h2>
      <h1 class="h2">₱ {item.price}</h1>
      <p>- {item.description}</p>

      <div class="mt-2">
        {#if item.type === "coffee"}
          <span class="badge variant-filled-secondary">
            <span>
              <i class="fas fa-coffee-togo"></i>
            </span>
            <span>Coffee</span>
          </span>
        {/if}

        {#if item.type === "tea"}
          <span class="badge variant-filled-success">
            <span>
              <i class="fas fa-mug-hot"></i>
            </span>
            <span>Tea</span>
          </span>
        {/if}

        {#if item.type === "iceBlended"}
          <span class="badge bg-blue-600">
            <span>
              <i class="fas fa-glass-whiskey-rocks"></i>
            </span>
            <span>Ice Blended</span>
          </span>
        {/if}
      </div>

      <div class="flex items-center gap-4 mt-12">
        <button on:click={addToCart} class="btn variant-filled-primary">
          <span>
            <i class="fas fa-cart-plus"></i>
          </span>
          <span>Add To Cart</span>
        </button>

        <div class="grid grid-cols-3 card">
          <button on:click={() => {if (count > 1) count -= 1}} class="btn btn-icon-sm rounded-none">-</button>
          <p class="text-center my-auto">x{count}</p>
          <button on:click={() => count += 1} class="btn btn-icon-sm rounded-none">+</button>
        </div>
      </div>
    </div>
  </div>
</div>
