import React from 'react'
import Post from 'components/Post'
import Spinner from 'components/Spinner'
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
        {posts.length > 0 ? (
          posts.map(({ author, body, title, publishedAt }) => (
            <Post
              key={body.substr(0, 10)}
              author={author}
              body={body}
              title={title}
              publishedAt={publishedAt}
            />
          ))
        ) : (
          <Spinner />
        )}
      </PostsWrapper>
    </Container>
  )
}