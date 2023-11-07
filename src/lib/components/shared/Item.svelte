<script>
  import { getModalStore } from '@skeletonlabs/skeleton'

  export let name
  export let price
  export let description
  export let type
  export let img

  export let background = '!bg-surface-900'
  export let addToCart = false

  const modalStore = getModalStore()

  function openAddToCart() {
    if (!addToCart) return

    modalStore.trigger({
      type: 'component',
      component: 'addToCart',
      modalClasses: 'items-end',
      meta: {
        item: { name, price, description, type, img }
      }
    })
  }
</script>

<button
  on:click={openAddToCart}
  class="card {background}"
  class:card-hover={addToCart}
  class:cursor-default={!addToCart}
>
  <slot name="heading" />

  <div class="p-4 divide-y">
    <div class="flex items-center justify-center pb-4">
      <img class="w-full max-h-[6rem] object-contain" src={img} alt={name}>
    </div>

    <div class="pt-4 text-start">
      <h2 class="h2">₱ {price}</h2>
      <h3 class="h3">{name}</h3>
    </div>
  </div>

  <slot name="footer" />
</button>
