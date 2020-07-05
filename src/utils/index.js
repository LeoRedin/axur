export function updatedPosts(authors, posts) {
  const correctValue = []

  posts.map(post => {
    const newPost = { ...post }

    const date = new Date(post.metadata.publishedAt)

    newPost.date = date

    authors.map(a => {
      if (a.id === post.metadata.authorId) newPost.author = a.name
    })

    delete newPost.metadata

    correctValue.push(newPost)
  })

  return correctValue
}
