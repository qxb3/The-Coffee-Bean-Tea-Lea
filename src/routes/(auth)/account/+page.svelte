<script>
  import { goto } from '$app/navigation'
  import { getToastStore } from '@skeletonlabs/skeleton'

  export let data

  const { supabase, session: { user } } = data

  const toastStore = getToastStore()

  async function logout() {
    const { error } = await supabase.auth.signOut()

    if (error) {
      return toastStore.trigger({
        message: error.message,
        background: 'bg-error-500'
      })
    }

    toastStore.clear()
    toastStore.trigger({
      message: 'Successfuly Logout',
      background: 'bg-success-500'
    })

    goto('/')
  }
</script>

<header>
  <title>Account</title>
</header>

<div class="container p-8">
  <div class="space-y-6">
    <label class="label">
      <span class="h5">User Id:</span>
      <input class="input" type="text" value={user?.id} disabled />
    </label>

    <label class="label">
      <span class="h5">Email:</span>
      <input class="input" type="text" value={user?.email} disabled />
    </label>

    <button on:click={logout} class="btn variant-filled-error">Logout</button>
  </div>
</div>
