import React from 'react'
import {
  Container,
  Section,
  MainHeader,
  NavContainer,
  Nav,
  Logo,
  Name,
  Links,
  MyLink,
} from './styles'

export default function Header() {
  const links = [
    {
      name: 'Listagem',
      path: '/',
    },
    {
      name: 'Sumário',
      path: '/summary',
    },
  ]

  return (
    <Container>
      <Section />
      <MainHeader>
        <NavContainer>
          <Nav>
            <Logo>
              <Name>Personal Blog</Name>
            </Logo>
            <Links>
              {links.map(({ name, path }) => (
                <MyLink key={name} href={path}>
                  {name}
                </MyLink>
              ))}
            </Links>
          </Nav>
        </NavContainer>
      </MainHeader>
    </Container>
  )
}
