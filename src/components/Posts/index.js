import React from 'react'
import Post from 'components/Post'
import { getPosts } from 'services/requests'

import { Container, PostsWrapper } from './styles'

export default function Posts() {
  const [posts, setPosts] = React.useState([])

  React.useEffect(() => {
    async function fetchData() {
      const requestPosts = await getPosts()

      setPosts(requestPosts)
    }

    fetchData()

    return () => fetchData()
  }, [])

  return (
    <Container>
      <PostsWrapper>
        {posts
          ? posts.map(({ author, body, title, publishedAt }) => (
              <Post
                author={author}
                body={body}
                title={title}
                publishedAt={publishedAt}
              />
            ))
          : null}
      </PostsWrapper>
    </Container>
  )
}
