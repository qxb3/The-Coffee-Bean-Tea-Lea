<script>
  import { getModalStore } from '@skeletonlabs/skeleton'

  const modalStore = getModalStore()

  const { item, imgPath } = $modalStore[0].meta

  function closeItemPopup() {
    modalStore.close()
  }
</script>

<div class="relative card bg-surface-900 p-4 max-w-screen-md">
  <button on:click={closeItemPopup} class="btn btn-icon-sm absolute top-4 right-4">
    <i class="fa fa-times"></i>
  </button>

  <div class="flex flex-col md:flex-row items-center gap-6">
    <div class="grid items-center mt-8 md:mt-0">
      <img class="w-full max-h-[10rem]" src={imgPath + item.img} alt={item.name}>
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

      <div class="mt-12">
        <button class="btn variant-filled-primary">
          <span>
            <i class="fas fa-cart-plus"></i>
          </span>
          <span>Add To Cart</span>
        </button>
      </div>
    </div>
  </div>
</div>
