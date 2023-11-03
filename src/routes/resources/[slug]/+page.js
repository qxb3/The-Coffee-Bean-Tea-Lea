import { error } from '@sveltejs/kit'

export async function load({ params }) {
  const { slug } = params

  try {
    const blog = await import(`../../../blogs/${slug}.md`)

    return { blog: blog.default }
  } catch {
    throw error(404, 'Blog / Resource Not Found')
  }
}
