import React from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Title,
  Body,
  AuthorWrapper,
  Author,
  Published,
} from './styles'

export function Post({ title, body, author, publishedAt }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Body>{body}</Body>
      <AuthorWrapper>
        <Author>{author}</Author>
      </AuthorWrapper>
      <Published>Publicado em: {publishedAt}</Published>
    </Container>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
}
