import React from 'react'

import Header from 'components/Header'
import Posts from 'components/Posts'

import { Container } from './styles'

export default function Main() {
  return (
    <Container>
      <Header />
      <Posts />
    </Container>
  )
}
