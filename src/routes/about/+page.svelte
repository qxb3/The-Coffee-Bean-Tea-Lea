<script>
  const sections = [
    {
      img: '/ui/about/heritage.png',
      headerText: 'Our Heritage',
      description: 'Born and brewed in Southern California since 1963, The Coffee Bean & Tea Leaf® has always been passionate about connecting loyal customers with carefully handcrafted products.',
      buttonHref: '/about/heritage',
    },
    {
      img: '/ui/about/hiring.png',
      headerText: 'Grow Your Career With Us',
      description: 'Our passion for being Simply The Best™ in everything we do goes way deeper than the bottom of the cup. It’s really rooted in people.',
      buttonHref: '/apply-job',
    }
  ]
</script>

{#each sections as section, i}
  {@const isEven = i % 2 === 0}
  {@const imageOrder = isEven ? "1" : "2"}
  {@const contentOrder = isEven ? "2" : "1"}

  <section class="grid grid-cols-1 lg:grid-cols-2 pb-16 lg:pb-0">
    <div style="background-image: url('{section.img}');" class="bg-[50%] bg-no-repeat bg-cover aspect-video order-1 lg:order-{imageOrder} z-0"></div>

    <div class="relative grid items-center px-8 order-2 lg:order-{contentOrder}">
      {#if isEven}
        <svg class="absolute top-5 -left-16 z-10" width="128" height="128">
          <polygon class="fill-surface-900" points="0,64 128,0 128,128" />
        </svg>
      {:else}
        <svg class="absolute top-5 -right-16 z-10" width="128" height="128">
          <polygon class="fill-surface-900" points="0,0 0,128 128,64" />
        </svg>
      {/if}

      <div class="max-w-xs lg:mx-auto mt-16 lg:mt-0">
        <h1 class="h1 text-5xl text-secondary-500">{section.headerText}</h1>
        <p class="text-md">{section.description}</p>
        <a href={section.buttonHref} class="btn btn-md rounded-md variant-filled-primary mt-6">Learn More</a>
      </div>
    </div>
  </section>
{/each}
