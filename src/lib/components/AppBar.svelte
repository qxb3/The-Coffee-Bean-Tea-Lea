<script>
  import { AppBar, getModalStore } from '@skeletonlabs/skeleton'
  import { page } from '$app/stores'
  import { blogStore, cartStore } from '$lib/stores.js'

  export let links
  export let session

  const modalStore = getModalStore()
  function openNavbar() {
    modalStore.trigger({
      type: 'component',
      component: 'navbar'
    })
  }
</script>

<AppBar
  padding="p-8" background="header-color"
  gridColumns="grid-cols-3"
  regionRowMain="container"
  regionRowHeadline="container max-w-screen-2xl"
  slotDefault="place-self-center"
  slotTrail="place-content-end"
>
  <svelte:fragment slot="lead">
    <i class="far fa-mug-hot fa-2x"></i>
  </svelte:fragment>

  <ul class="gap-12 sm:flex hidden">
    {#each links as { text, path }}
      <li class="text-lg flex flex-col items-center justify-center">
        <a href={path}>{text}</a>

        {#if $page.url.pathname === path}
          <div class="rounded-full w-2 h-2 bg-white"></div>
        {/if}
      </li>
    {/each}
  </ul>

  <svelte:fragment slot="trail">
    <div class="grid items-center">
      <div class="hidden sm:flex gap-2">
        {#if !session}
          <a href="/login" class="btn variant-filled-primary">Login</a>
        {:else}
          <div class="sm:relative">
            {#if $cartStore.length > 0}
              <div class="absolute -top-2 -right-2 z-10">
                <span class="badge variant-filled rounded-full">{$cartStore.length}</span>
              </div>
            {/if}

            <a href="/cart" class="btn-icon !bg-transparent">
              <i class="far fa-shopping-cart fa-2x"></i>
            </a>
          </div>

          <div>
            <a href="/account" class="btn-icon">
              <i class="fas fa-user fa-2x"></i>
            </a>
          </div>
        {/if}
      </div>

      <button on:click={openNavbar} class="btn-icon !bg-transparent sm:hidden">
        <i class="far fa-hamburger fa-2x"></i>
      </button>
    </div>
  </svelte:fragment>

  <svelte:fragment slot="headline">
    <!-- Home Header -->
    <div class="relative p-8 text-center block" class:hidden={$page.url.pathname !== "/"}>
      <img class="absolute top-5 left-0 w-[26rem] scale-x-[-1] xl:block hidden" src="/ui/home/coffee-grinder.png" alt="Coffee Grinder" />
      <img class="absolute top-[-1rem] right-0 w-[26rem] xl:block hidden" src="/ui/home/coffee-cup.png" alt="Coffee Cup" />

      <h1 class="h1">The best quality coffee beans <br>for the best coffee brew</h1>
      <p class="text-primary-400 mt-6">A cup is enough to give you energy <br>all day long</p>
      <button class="btn sm:btn-lg variant-filled-primary mt-12">
        <span><i class="far fa-shopping-bag"></i></span>
        <span>Order Now</span>
      </button>
    </div>

    <!-- Menu Header -->
    <div class="py-16 px-8 block" class:hidden={$page.url.pathname !== "/menu"}>
      <div class="text-center max-w-xl mx-auto">
        <h1 class="h1 underline z-10">Menu</h1>
        <p class="text-primary-400 mt-6">Savor an exquisite menu, where every dish embodies culinary perfection. Join us for an unforgettable dining experience that blends passion with exceptional taste.</p>
      </div>
    </div>

    <!-- About Header -->
    <div class="py-16 px-4 block" class:hidden={$page.url.pathname !== "/about"}>
      <div class="text-center max-w-xl mx-auto">
        <h1 class="h1 underline z-10">About Us</h1>
        <p class="text-primary-400 mt-6">Discover The Coffee Tea & Lea, where passion for exceptional taste meets a dedication to culinary perfection. Since our inception, we have been committed to curating an exquisite menu that embodies the essence of our craft. Each dish is a reflection of our devotion to the art of gastronomy, meticulously prepared with the finest, handpicked ingredients.</p>
      </div>
    </div>

    <!-- About > Heritage Header -->
    <div class="py-16 px-4 block" class:hidden={$page.url.pathname !== "/about/heritage"}>
      <div class="text-center max-w-xl mx-auto">
        <h1 class="h1 underline z-10">Our Heritage</h1>
        <p class="text-primary-400 mt-6">We too come from humble beginnings :)</p>
      </div>
    </div>

    <!-- Resources Header -->
    <div class="py-16 px-4 block" class:hidden={$page.url.pathname !== "/resources"}>
      <div class="text-center max-w-xl mx-auto">
        <h1 class="h1 underline z-10">Resources</h1>
        <p class="text-primary-400 mt-6">Here you can find useful resources for our fellow coffee lovers!</p>
      </div>
    </div>

    <!-- Resources > Blog Header -->
    <div class="py-4 px-4 block" class:hidden={!$blogStore}>
      <ol class="breadcrumb-nonresponsive justify-center flex-col md:flex-row">
        <li class="crumb">
          <a href="/" class="anchor">Home</a>
          <span class="crumb-separator" aria-hidden>/</span>
        </li>

        <li class="crumb">
          <a href="/resources" class="anchor">Resources</a>
          <span class="crumb-separator" aria-hidden>/</span>
        </li>

        <li class="line-clamp-1">{$blogStore?.title}</li>
      </ol>

      <p class="text-xs text-center">
        <span>{$blogStore?.date} • {$blogStore?.timeRead} read •</span>
        {#each $blogStore?.tags ?? [] as tag}
          <span class="badge bg-surface-700 mr-2">{tag}</span>
        {/each}
      </p>
      <p class="text-center text-xs underline">by {$blogStore?.user}</p>
    </div>

    <!-- Cart Header -->
    <div class="py-16 px-4 block" class:hidden={$page.url.pathname !== "/cart"}>
      <div class="text-center max-w-xl mx-auto">
        <h1 class="h1 underline z-10">Cart</h1>
        <p class="text-primary-400 mt-6">Here you can find your added cart items!</p>
      </div>
    </div>

    <!-- Active Orders Header -->
    <div class="py-16 px-4 block" class:hidden={$page.url.pathname !== "/active-orders"}>
      <div class="text-center max-w-xl mx-auto">
        <h1 class="h1 underline z-10">Active Orders</h1>
        <p class="text-primary-400 mt-6">Thank you for buying with us! :D</p>
      </div>
    </div>

    <!-- Login Header -->
    <div class="py-8 px-4 block" class:hidden={$page.url.pathname !== "/login"}>
      <div class="text-center max-w-xl mx-auto">
        <h1 class="h1 underline z-10">Login</h1>
        <p class="text-primary-400 mt-6">Welcome Back! We're thrilled to have you back with us.</p>
      </div>
    </div>

    <!-- SignUp Header -->
    <div class="py-8 px-4 block" class:hidden={$page.url.pathname !== "/signup"}>
      <div class="text-center max-w-xl mx-auto">
        <h1 class="h1 underline z-10">SignUp</h1>
        <p class="text-primary-400 mt-6">Please login to use extra features!</p>
      </div>
    </div>

    <!-- Account Header -->
    <div class="py-8 px-4 block" class:hidden={$page.url.pathname !== "/account"}>
      <div class="text-center max-w-xl mx-auto">
        <h1 class="h1 underline z-10">Account</h1>
        <p class="text-primary-400 mt-6">Hello! {session?.user?.email}</p>
      </div>
    </div>
  </svelte:fragment>
</AppBar>
