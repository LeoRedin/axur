import React from 'react'

import { Container, Item, ItemTitle, H2, Hr, Date } from './styles'

export function Summary() {
  return (
    <Container>
      <Item>
        <ItemTitle>
          <H2>Title</H2>
          <Date>25/08/2020</Date>
        </ItemTitle>
        <Hr />
      </Item>
    </Container>
  )
}
