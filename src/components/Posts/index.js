import React from 'react'
import Post from 'components/Post'

import { Container, PostsWrapper } from './styles'

export default function Posts() {
  const posts = [
    {
      title: 'Title 1',
      body:
        'Thus thing afterprises of discove, the us mortune, and momenterprises ther "tis question is not of? To dreat to sleep to sleep of us the oppresolution: whose bourn no take arrows of trave under "tis regards of grunt a life; fortal count we haveller resolence to sleep; to gread off time, to suffled o"er a bare bodkin? Who would by a we himself mind that undisprises of troublesh is no take arms and, by a sea of devoutrave unworthy to take arms against a sea of action.',
      author: 'Author 1',
      publishedAt: '27/05/1987',
    },
    {
      title: 'Title 1',
      body:
        'We will mesh the buzzword "strategic". Our feature set is unparalleled, but our subscriber-defined CAE and non-complex configuration is invariably considered a remarkable achievement. What does the commonly-used commonly-used term "strategic" really mean? Think ultra-long-term. The reporting factor can be summed up in one word: B2B2C. Think clicks-and-mortar. We believe we know that it is better to enhance compellingly than to monetize dynamically. Think real-time, backward-compatible. The ability to synergize macro-holistically leads to the capability to envisioneer holistically. The implementation factor can be summed up in one word: six-sigma.',
      author: 'Author 1',
      publishedAt: '27/05/1987',
    },
    {
      title: 'Title 1',
      body:
        'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      author: 'Author 1',
      publishedAt: '27/05/1987',
    },
    {
      title: 'Title 1',
      body:
        'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      author: 'Author 1',
      publishedAt: '27/05/1987',
    },
    {
      title: 'Title 1',
      body:
        'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      author: 'Author 1',
      publishedAt: '27/05/1987',
    },
    {
      title: 'Title 1',
      body:
        'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      author: 'Author 1',
      publishedAt: '27/05/1987',
    },
  ]
  return (
    <Container>
      <PostsWrapper>
        {posts.map(({ title, body, author, publishedAt }) => (
          <Post
            title={title}
            body={body}
            author={author}
            publishedAt={publishedAt}
          />
        ))}
      </PostsWrapper>
    </Container>
  )
}
