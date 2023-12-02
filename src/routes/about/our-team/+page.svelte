<script>
  const team = {
    developers: [
      {
        name: 'Salimbagat, Justin Karl',
        role: 'Senior Developer & UI Designer',
        img: '/team/salimbagat.png'
      },
      {
        name: 'Nuevo, Adam',
        role: 'Developer',
        img: '/team/nuevo.png'
      },
      {
        name: 'Cahilig, Efren',
        role: 'Developer',
        img: '/team/effren.png'
      }
    ],
    uiDesigners: [
      {
        name: 'Salupan, Mark',
        role: 'UI Designer',
        img: '/team/salupan.png'
      },
      {
        name: 'Mendoza, Chael',
        role: 'UI Designer',
        img: '/team/mendoza.png'
      },
      {
        name: 'Bautista, Winston',
        role: 'UI Designer',
        img: '/team/winston.png'
      },
      {
        name: 'Modelo, Darlene',
        role: 'UI Designer',
        img: '/team/sofhia-modelo.png'
      },
      {
        name: 'Lumido, Christian',
        role: 'Database, Designer',
        img: '/team/lumido.png'
      }
    ],
    researchers: [
      {
        name: 'Modelo, Hanna',
        role: 'Researcher',
        img: '/team/hanna-modelo.png'
      },
      {
        name: 'Ortega, Arian',
        role: 'Researcher & Tasks',
        img: '/team/ortega.png'
      },
      {
        name: 'Moreno, Leigh',
        role: 'Researcher & Tasks',
        img: '/team/moreno.png'
      }
    ],
    tasks: [
      {
        name: 'Simon, Ysa',
        role: 'Tasks',
        img: '/team/ysa-simon.png'
      },
      {
        name: 'Vestidas, Jordan',
        role: 'Tasks',
        img: '/team/vestidas.png'
      },
      {
        name: 'Roca, Erwin',
        role: 'Researcher',
        img: '/team/roca.png'
      }
    ]
  }
</script>

<div class="container p-8">
  <!-- Developers -->
  <div class="mt-16">
    <h1 class="h1 text-center text-blue-500 space-x-4">
      <span>
        <i class="far fa-code"></i>
      </span>
      <span class="underline">Developers</span>
      <span>
        <i class="far fa-code"></i>
      </span>
    </h1>

    <div class="flex flex-wrap justify-center gap-12 mx-auto mt-8">
      {#each team.developers as dev}
        <div>
          <div class="relative rounded-full border-4 border-blue-500">
            <img class="w-full max-w-xs mx-auto rounded-full" src={dev.img} alt={dev.name} />

            <div class="absolute bottom-0 left-10 bg-blue-500 rounded-full p-2 z-10">
              <i class="far fa-code fa-2x"></i>
            </div>
          </div>

          <div class="text-center">
            <h3 class="h3 text-center mt-8">{dev.name}</h3>
            <p>{dev.role}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- UI Designers -->
  <div class="mt-28">
    <h1 class="h1 text-center text-green-500 space-x-4">
      <span>
        <i class="far fa-palette"></i>
      </span>
      <span class="underline">UI Designer</span>
      <span>
        <i class="far fa-palette"></i>
      </span>
    </h1>

    <div class="flex flex-wrap justify-center gap-12 mx-auto mt-8">
      {#each team.uiDesigners as ui}
        <div>
          <div class="relative rounded-full border-4 border-green-500">
            <img class="w-full max-w-xs mx-auto rounded-full" src={ui.img} alt={ui.name} />

            <div class="absolute bottom-0 left-10 bg-green-500 rounded-full p-2 z-10">
              <i class="fas fa-palette fa-2x"></i>
            </div>
          </div>

          <div class="text-center">
            <h3 class="h3 text-center mt-8">{ui.name}</h3>
            <p>{ui.role}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Researchers -->
  <div class="mt-28">
    <h1 class="h1 text-center text-cyan-500 space-x-4">
      <span>
        <i class="far fa-graduation-cap"></i>
      </span>
      <span class="underline">Researchers</span>
      <span>
        <i class="far fa-graduation-cap"></i>
      </span>
    </h1>

    <div class="flex flex-wrap justify-center gap-12 mx-auto mt-8">
      {#each team.researchers as researcher}
        <div>
          <div class="relative rounded-full border-4 border-cyan-500">
            <img class="w-full max-w-xs mx-auto rounded-full" src={researcher.img} alt={researcher.name} />

            <div class="absolute bottom-0 left-10 bg-cyan-500 rounded-full p-2 py-3 z-10">
              <i class="fas fa-graduation-cap fa-2x"></i>
            </div>
          </div>

          <div class="text-center">
            <h3 class="h3 text-center mt-8">{researcher.name}</h3>
            <p>{researcher.role}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Tasks -->
  <div class="mt-28 mb-28">
    <h1 class="h1 text-center text-rose-500 space-x-4">
      <span>
        <i class="far fa-thumbtack"></i>
      </span>
      <span class="underline">Tasks</span>
      <span>
        <i class="far fa-thumbtack"></i>
      </span>
    </h1>

    <div class="flex flex-wrap justify-center gap-12 mx-auto mt-8">
      {#each team.tasks as task}
        <div>
          <div class="relative rounded-full border-4 border-rose-500">
            <img class="w-full max-w-xs mx-auto rounded-full" src={task.img} alt={task.name} />

            <div class="absolute bottom-0 left-10 bg-rose-500 rounded-full p-2 px-4 z-10">
              <i class="far fa-thumbtack fa-2x"></i>
            </div>
          </div>

          <div class="text-center">
            <h3 class="h3 text-center mt-8">{task.name}</h3>
            <p>{task.role}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
