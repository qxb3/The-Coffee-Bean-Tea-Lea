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
      headerText: 'Grow Your Career',
      description: 'Our passion for being Simply The Best™ in everything we do goes way deeper than the bottom of the cup. It’s really rooted in people.',
      buttonHref: '/apply-job',
    },
    {
      img: '/ui/about/team.png',
      headerText: 'Our Team',
      description: 'Meet our Team that makes this website possible!',
      buttonHref: '/about/our-team',
    },
  ]
</script>

{#each sections as section, i}
  {@const isEven = i % 2 === 0}

  <section class="flex flex-col pb-16 lg:pb-0" class:lg:flex-row={isEven} class:lg:flex-row-reverse={!isEven}>
    <div style="background-image: url('{section.img}');" class="basis-auto lg:flex-1 bg-[50%] bg-no-repeat bg-cover aspect-video z-0"></div>

    <div class="basis-auto lg:flex-1 relative grid items-center px-8 lg:px-0">
      {#if isEven}
        <svg class="absolute top-5 -left-24 z-10 hidden lg:block" width="128" height="128">
          <polygon class="fill-surface-900" points="64,64 128,0 128,128" />
        </svg>
      {:else}
        <svg class="absolute top-5 -right-24 z-10 hidden lg:block" width="128" height="128">
          <polygon class="fill-surface-900" points="0,0 0,128 64,64" />
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
