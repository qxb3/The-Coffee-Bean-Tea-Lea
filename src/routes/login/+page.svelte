<script>
  import { goto } from '$app/navigation'
  import { getToastStore } from '@skeletonlabs/skeleton'

  export let data
  const { supabase } = data

  const toastStore = getToastStore()

  let email = ''
  let password = ''

  let emailErr = false
  let passwordErr = false

  async function login() {
    if (!email || !password) {
      toastStore.trigger({
        message: 'Please fill-up missing fields',
        background: "bg-error-500"
      })
    }

    if (!email) return emailErr = true
    if (!password) return passwordErr = true

    toastStore.trigger({
      message: 'Logging in! Please wait...',
      background: 'bg-success-500'
    })

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      emailErr = true
      passwordErr = true

      return toastStore.trigger({
        message: error.message,
        background: "bg-error-500"
      })
    }

    if (data) {
      emailErr = false
      passwordErr = false

      toastStore.clear()
      toastStore.trigger({
        message: 'Successfuly Logged in!',
        background: 'bg-success-500'
      })

      goto('/')
    }
  }
</script>

<header>
  <title>Login</title>
</header>

<div class="container max-w-xl px-8 py-12">
  <form class="space-y-6">
    <label class="label">
      <span class="h5">Email:</span>
      <input bind:value={email} class="input" class:input-error={emailErr} type="text" placeholder="qxb3@gmail.com" />
    </label>

    <label class="label">
      <span class="h5">Password:</span>
      <input bind:value={password} class="input" class:input-error={passwordErr} type="password" placeholder="************" />
    </label>

    <button on:click={login} class="btn variant-filled-success w-full" type="submit">Login</button>

    <p class="text-xs text-center">
      <span>Don't have an account yet?</span>
      <span class="link">
        <a href="/signup">SignUp!</a>
      </span>
    </p>
  </form>
</div>
