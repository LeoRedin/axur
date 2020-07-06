export function updatedPosts(authors, posts) {
  const correctValue = []

  posts.map(post => {
    const newPost = { ...post }

    const date = new Date(post.metadata.publishedAt).toLocaleDateString('pt-br')

    newPost.publishedAt = date

    // eslint-disable-next-line array-callback-return
    authors.map(a => {
      if (a.id === post.metadata.authorId) newPost.author = a.name
    })

    delete newPost.metadata

    return correctValue.push(newPost)
  })

  return correctValue
}

export function summary(posts) {
  const postsSummary = []

  posts.map(post => {
    const newSummary = {
      date: new Date(post.metadata.publishedAt).toLocaleDateString('pt-br'),
      title: post.title,
    }

    return postsSummary.push(newSummary)
  })

  return postsSummary
}
