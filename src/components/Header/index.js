import React from 'react'
import {
  Container,
  Section,
  MainHeader,
  NavContainer,
  Nav,
  Logo,
  Name,
} from './styles'

export default function Header() {
  return (
    <Container>
      <Section />
      <MainHeader>
        <NavContainer>
          <Nav>
            <Logo>
              <Name>AXUR</Name>
            </Logo>
          </Nav>
        </NavContainer>
      </MainHeader>
    </Container>
  )
}
