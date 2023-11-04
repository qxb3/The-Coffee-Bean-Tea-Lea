<script>
  const timeline = [
    {
      date: '1963',
      description: 'Our first store in Southern California opened, where founder Herb Hyman began importing and roasting coffee.',
      img: '/ui/heritage/1963.png'
    },
    {
      date: '1970s',
      description: 'Herb Hyman moved roasting facility to Camarillo and began to establish direct relationships with coffee growers.',
      img: '/ui/heritage/1970s.png'
    },
    {
      date: '1987',
      description: 'History was made when a barista invented the ICE BLENDED® drink at our Westwood, California store.',
      img: '/ui/heritage/1987.png'
    },
    {
      date: '1988',
      description: 'The Chai Tea Latte launched.',
      img: '/ui/heritage/1988.png'
    },
    {
      date: '2003',
      description: 'We opened our first store in the Philippines.',
      img: '/ui/heritage/2003.png'
    }
  ]
</script>

<div class="container p-8">
  {#each timeline as { date, description, img }, i}
    {@const isEven = i % 2 === 0}

    <div class="grid grid-cols-1 sm:grid-cols-3">
      <!-- Image -->
      <div class="grid items-center order-1" class:sm:order-3={isEven}>
        <img src={img} alt="">
      </div>

      <!-- Midle Line -->
      <div class="hidden sm:grid grid-rows-[1fr_auto_1fr] gap-4 items-center px-4 order-2 sm:h-[40rem]">
        <div class="mx-auto w-1 h-full bg-secondary-500 rounded-t-md" class:invisible={i === 0}></div>

        <div class="grid items-center grid-cols-[1fr_auto_1fr] gap-4">
          <div class="w-full h-1 bg-secondary-500 rounded-md"></div>
          <div class="mx-auto w-12 h-12 rounded-full border-4 border-primary-500"></div>
          <div class="w-full h-1 bg-secondary-500 rounded-md"></div>
        </div>

        <div class="mx-auto w-1 h-full bg-secondary-500 rounded-md"></div>
      </div>

      <!-- Text -->
      <div class="grid items-center order-3 my-8 sm:my-0" class:!order-1={isEven}>
        <div class="max-w-md" class:sm:text-end={isEven}>
          <h1 class="h1 text-secondary-500">{date}</h1>
          <p class="mt-2">{description}</p>
        </div>
      </div>

      {#if i > 0}
        <div class="w-full h-[1px] bg-primary-500 mb-8 block sm:hidden"></div>
      {/if}
    </div>
  {/each}

  <div class="text-center mt-12">
    <h1 class="h1 text-secondary-500">Today</h1>
    <p>Set out on a journey to take our brand to new heights worldwide.</p>

    <button class="btn variant-filled-secondary rounded-xl mt-6">
      <span><i class="far fa-scroll"></i></span>
      <span>Visit our menu</span>
    </button>
  </div>
</div>
