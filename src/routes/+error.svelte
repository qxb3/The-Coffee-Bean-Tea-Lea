<script>
  import { page } from '$app/stores'
</script>

<div class="container text-center py-16">
  <h1 class="h1">{$page.status}</h1>
  <p>{$page.error.message}</p>
</div>
