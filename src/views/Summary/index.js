import React from 'react'
import { getSummary } from 'services/requests'
import { Spinner } from 'components'

import { Container, Item, ItemTitle, H2, Hr, Date } from './styles'

export function Summary() {
  const [items, setItems] = React.useState(null)

  React.useState(() => {
    async function summary() {
      const posts = await getSummary()

      setItems(posts)
    }

    summary()

    return () => summary
  }, [])

  return (
    <Container>
      {items ? (
        items.map(item => (
          <Item key={item.date}>
            <ItemTitle>
              <H2>{item.title}</H2>
              <Date>{item.date}</Date>
            </ItemTitle>
            <Hr />
          </Item>
        ))
      ) : (
        <Spinner />
      )}
    </Container>
  )
}
