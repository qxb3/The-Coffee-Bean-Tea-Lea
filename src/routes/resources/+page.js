/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const res = await fetch('/api/blogs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const blogs = await res.json()

  return { blogs }
}
