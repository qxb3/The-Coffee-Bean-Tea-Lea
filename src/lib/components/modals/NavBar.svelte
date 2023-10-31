<script>
  import { getModalStore } from '@skeletonlabs/skeleton'
  import { page } from '$app/stores'

  export let links

  const modalStore = getModalStore()

  $: activeLink = (path) => (path === $page.url.pathname ? '!bg-secondary-500' : '')

  function closeNavbar() {
    modalStore.close()
  }
</script>

<div class="card bg-surface-900 p-4 w-full">
  <nav class="list-nav">
    <ul>
      {#each links as link}
        <li>
          <a on:click={closeNavbar} href={link.path} class="{activeLink(link.path)}">
            <span class="badge">
              <i class="{link.icon} fa-2x"></i>
            </span>
            <span class="flex-auto">{link.text}</span>
          </a>
        </li>
      {/each}

      <li class="py-4">
        <div class="w-full h-1 bg-white"></div>
      </li>

      <li>
        <a on:click={closeNavbar} href="/cart" class={activeLink("/cart")}>
          <span class="badge">
            <i class="far fa-shopping-cart fa-2x"></i>
          </span>
          <span class="flex-auto">Cart</span>
        </a>
      </li>
    </ul>

    <div class="mt-6">
      <button on:click={closeNavbar} class="btn variant-filled-primary w-full">
        <span>
          <i class="far fa-times"></i>
        </span>
        <span>Close</span>
      </button>
    </div>
  </nav>
</div>
