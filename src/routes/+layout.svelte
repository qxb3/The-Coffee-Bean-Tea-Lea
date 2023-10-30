<script>
	import '../app.css'

	import { AppShell, AppBar } from '@skeletonlabs/skeleton'
  import { page } from '$app/stores'

  const links = [
    { text: 'Home', path: '/' },
    { text: 'Menu', path: '/menu' },
    { text: 'About', path: '/about' },
    { text: 'Resources', path: '/resources' }
  ]
</script>

<AppShell>
  <svelte:fragment slot="pageHeader">
    <AppBar
      padding="p-8"
      background="header-color"
      gridColumns="grid-cols-3"
      regionRowMain="container"
      regionRowHeadline="container max-w-screen-2xl"
      slotDefault="place-self-center"
      slotTrail="place-content-end"
    >
      <svelte:fragment slot="lead">
        <i class="far fa-mug-hot fa-2x"></i>
      </svelte:fragment>

      <ul class="gap-12 md:flex hidden">
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
          <a href="/cart" class="btn-icon !bg-transparent md:block hidden">
            <i class="far fa-shopping-cart fa-2x"></i>
          </a>

          <button class="btn-icon !bg-transparent md:hidden">
            <i class="far fa-hamburger fa-2x"></i>
          </button>
        </div>
      </svelte:fragment>

      <svelte:fragment slot="headline">
        <div class="relative p-8 text-center block" class:hidden={$page.url.pathname !== "/"}>
          <img class="absolute top-5 left-0 w-[26rem] scale-x-[-1] xl:block hidden" src="/ui/coffee-grinder.png" alt="Coffee Grinder" />
          <img class="absolute top-[-1rem] right-0 w-[26rem] xl:block hidden" src="/ui/coffee-cup.png" alt="Coffee Cup" />

          <h1 class="h1">The best quality coffee beans <br>for the best coffee brew</h1>
          <p class="p text-primary-400 mt-6">A cup is enough to give you energy <br>all day long</p>
          <button class="btn sm:btn-lg variant-filled-primary mt-12">
            <span><i class="far fa-shopping-bag"></i></span>
            <span>Order Now</span>
          </button>
        </div>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>

	<slot />

  <svelte:fragment slot="pageFooter">
    <footer class="flex justify-around bg-[#333] p-8 pt-16">
      <div>
        <h1 class="h1">GET IN TOUCH</h1>
        <p>
          <span>Phone: +63 12345678</span><br>
          <span>or</span>
          <span>
            <a class="underline" href="mailto:loremipsum1234@gmail.com">send an email</a>
          </span>
        </p>

        <h3 class="h3 mt-36">© Copyright 2023</h3>
      </div>

      <div>
        <h1 class="h1">WE'RE HIRING</h1>
        <p>
          <span>Want a job?</span>
          <span>
            <a class="underline" href="mailto:loremipsum1234@gmail.com">send your cv</a>
          </span>
        </p>
      </div>

      <div>
        <img class="w-80" src="/ui/coffee-cup-design.png" alt="Designed Coffee Cup">
      </div>
    </footer>
  </svelte:fragment>
</AppShell>
