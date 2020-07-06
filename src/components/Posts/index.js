import React from 'react'
import { Post, Spinner } from 'components'
import { getPosts } from 'services/requests'

import {
  Container,
  PostsWrapper,
  FilterWrapper,
  FilterLabel,
  AuthorLabel,
  Authors,
} from './styles'

export function Posts() {
  const [originalPosts, setOriginalPosts] = React.useState([])
  const [posts, setPosts] = React.useState([])
  const [authors, setAuthors] = React.useState(null)
  const [activeAuthor, setActiveAuthor] = React.useState('')

  React.useEffect(() => {
    async function fetchData() {
      const requestPosts = await getPosts()

      setOriginalPosts(requestPosts)
      setPosts(requestPosts)
    }

    fetchData()

    return () => fetchData()
  }, [])

  React.useEffect(() => {
    const updatedAuthors = []
    originalPosts.map(post => updatedAuthors.push(post.author))

    const authorsSet = new Set(updatedAuthors)

    const uniqueAuthors = []
    authorsSet.forEach(item => uniqueAuthors.push(item))

    setAuthors(uniqueAuthors)
  }, [originalPosts])

  const handleFilter = (type, filterValue) => {
    if (type === 'author') {
      const updatedPosts = [...originalPosts]

      const filtered = updatedPosts.filter(post => post.author === filterValue)

      setActiveAuthor(filterValue)
      setPosts(filtered)
    }
  }

  return (
    <Container>
      {posts.length > 0 ? (
        <FilterWrapper>
          <FilterLabel>Filtre por autor:</FilterLabel>
          <Authors>
            {authors
              ? authors.map(author => (
                  <AuthorLabel
                    onClick={() => handleFilter('author', author)}
                    active={activeAuthor === author}
                    key={author}
                  >
                    {author}
                  </AuthorLabel>
                ))
              : null}
          </Authors>
        </FilterWrapper>
      ) : null}
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
