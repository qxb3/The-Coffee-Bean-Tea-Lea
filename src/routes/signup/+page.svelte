<script>
  import { getToastStore } from '@skeletonlabs/skeleton'

  export let data
  const { supabase } = data

  const toastStore = getToastStore()

  let email = ''
  let password = ''

  let emailErr = false
  let passwordErr = false

  let confirmEmail = false

  async function signUp() {
    if (!email || !password) {
      toastStore.trigger({
        message: 'Please fill-up missing fields',
        background: "bg-error-500"
      })
    }

    if (!email) return emailErr = true
    if (!password) return passwordErr = true
    if (password.length < 6) {
      return toastStore.trigger({
        message: 'Password needs to be 6 characters or more',
        background: "bg-error-500"
      })
    }

    toastStore.trigger({
      message: 'Signing Up! Please wait...',
      background: 'bg-success-500'
    })

    const { data, error } = await supabase.auth.signUp({
      email,
      password
    })

    if (error) {
      return toastStore.trigger({
        message: 'Something went wrong',
        background: "bg-error-500"
      })
    }

    if (data) {
      emailErr = false
      passwordErr = false
      confirmEmail = true
    }
  }
</script>

<div class="container max-w-xl px-8 py-12">
  {#if !confirmEmail}
    <form class="space-y-6">
      <label class="label">
        <span class="h5">Email:</span>
        <input bind:value={email} class="input" class:input-error={emailErr} type="text" placeholder="qxb3@gmail.com" />
      </label>

      <label class="label">
        <span class="h5">Password:</span>
        <input bind:value={password} class="input" class:input-error={passwordErr} type="password" placeholder="************" />
      </label>

      <button on:click={signUp} class="btn variant-filled-success w-full" type="submit">Sign Up</button>

      <p class="text-xs text-center">
        <span>Already have an account?</span>
        <span class="link">
          <a href="/login">Login!</a>
        </span>
      </p>
    </form>
  {:else}
    <div class="text-center py-12 space-y-4">
      <h2 class="h2">Email Confirmation Has Been Sent!</h2>
      <p>
        <span>Confirm your email and</span>
        <span class="link">
          <a href="/login">login</a>
        </span>
      </p>
    </div>
  {/if}
</div>
