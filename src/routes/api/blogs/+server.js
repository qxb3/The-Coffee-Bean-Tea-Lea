import { json } from '@sveltejs/kit'

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  const blogsFiles = Object.entries(import.meta.glob('/src/blogs/*.md'))
  const blogs = await Promise.all(
    blogsFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()

      return {
        url: '/resources' + path.slice(10, -3),
        ...metadata
      }
    })
  )

  return json(blogs)
}
