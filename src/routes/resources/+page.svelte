<script>
  export let data

  const featuredBlogs = data.blogs.filter(v => v.featured)
  const normalBlogs = data.blogs.filter(v => !v.featured)
</script>

<header>
  <title>Resources</title>
</header>

<div class="container p-8 divide-y">
  <div class="pb-16">
    <h1 class="h1 mb-8">Featured</h1>

    {#each featuredBlogs as blog}
      <a href={blog.url} class="card card-hover flex flex-col sm:flex-row cursor-pointer my-6 overflow-hidden">
        <div style="background-image: url('{blog.thumbnail}');" class="bg-[50%] sm:min-w-[12rem] md:min-w-[16rem] bg-no-repeat bg-cover aspect-video z-0"></div>

        <div class="p-4">
          <div class="flex items-center gap-2">
            <img class="w-6 rounded-full line-clamp-1" src={blog.userProfile} alt={blog.user}>
            <p class="font-bold text-xs">{blog.user}</p>
          </div>

          <div class="mt-2">
            <h2 class="h2">{blog.title}</h2>
            <p class="text-neutral-400 line-clamp-2">{blog.description}</p>
          </div>

          <div class="flex items-center mt-4">
            <p class="text-xs">
              <span>{blog.date} • {blog.timeRead} read •</span>
              {#each blog.tags ?? [] as tag}
                <span class="badge bg-surface-500 mr-2">{tag}</span>
              {/each}
            </p>
          </div>
        </div>
      </a>
    {/each}
  </div>

  <div class="pt-16">
    {#each normalBlogs as blog}
      <a href={blog.url} class="card card-hover flex flex-col sm:flex-row cursor-pointer my-6 overflow-hidden">
        <div style="background-image: url('{blog.thumbnail}');" class="bg-[50%] sm:min-w-[12rem] md:min-w-[16rem] bg-no-repeat bg-cover aspect-video z-0"></div>

        <div class="p-4">
          <div class="flex items-center gap-2">
            <img class="w-6 rounded-full line-clamp-1" src={blog.userProfile} alt={blog.user}>
            <p class="font-bold text-xs">{blog.user}</p>
          </div>

          <div class="mt-2">
            <h2 class="h2">{blog.title}</h2>
            <p class="text-neutral-400 line-clamp-2">{blog.description}</p>
          </div>

          <div class="flex items-center mt-4">
            <p class="text-xs">
              <span>{blog.date} • {blog.timeRead} read •</span>
              {#each blog.tags ?? [] as tag}
                <span class="badge bg-surface-500 mr-2">{tag}</span>
              {/each}
            </p>
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>
