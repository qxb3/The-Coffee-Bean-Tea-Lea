<script>
  import { getModalStore } from '@skeletonlabs/skeleton'
  import { page } from '$app/stores'

  export let links

  const session = $page.data.session
  const modalStore = getModalStore()

  $: activeLink = (path) => (path === $page.url.pathname ? '!bg-secondary-500' : '')

  function closeNavbar() {
    modalStore.close()
  }
</script>

<div class="card bg-surface-900 p-4 w-full">
  <!-- Work around for auto focus thing in navbar -->
  <button class="absolute top-[-999rem]"></button>

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
        {#if session}
          <a on:click={closeNavbar} href="/account" class={activeLink("/account")}>
            <span class="badge">
              <i class="far fa-user fa-2x"></i>
            </span>
            <span class="flex-auto">Account</span>
          </a>

          <a on:click={closeNavbar} href="/cart" class={activeLink("/cart")}>
            <span class="badge">
              <i class="far fa-shopping-cart fa-2x"></i>
            </span>
            <span class="flex-auto">Cart</span>
          </a>
        {:else}
          <a href="/login" on:click={closeNavbar} class="btn variant-filled-primary w-full">
            <span>
              <i class="far fa-sign-in-alt"></i>
            </span>
            <span>Login</span>
          </a>
        {/if}
      </li>
  </nav>
</div>
