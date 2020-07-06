import styled from 'styled-components'
import { lighten } from 'polished'
import { color } from 'theme'

export const Container = styled.div``

export const Section = styled.section`
  width: 100%;
  background-color: ${color.orange};
  background-attachment: scroll;
  background-origin: padding-box;
  background-clip: border-box;
  background-image: linear-gradient(
    -213deg,
    ${color.lightOrange} 0%,
    ${color.orange} 100%
  );
  background-position: right center, left center;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  z-index: 0;
  align-items: center;
  display: flex;
  height: 100px;
`
export const MainHeader = styled.header`
  width: 100%;
  flex-shrink: 0;
  padding: 30px 0px 0px;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;
  z-index: 10;
  position: absolute;
  top: 0px;
`
export const NavContainer = styled.div`
  width: 100%;
  margin: 0px auto;
  max-width: 800px;
  padding: 0px 40px;
`
export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.a`
  text-decoration: none;
  color: rgb(255, 255, 255);
  position: relative;
  display: flex;
  align-items: center;
  font-size: 2em;
`
export const Name = styled.span``

export const Links = styled.div`
  font-size: 16px;
  line-height: 1.25;
  display: flex;
  align-items: center;
`

export const MyLink = styled.a`
  text-decoration: none;
  color: rgb(255, 255, 255);
  padding: 8px 10px;
  border-radius: 3px;
  background: transparent none repeat scroll 0% 0%;

  &:hover {
    background-color: ${lighten(0.15, color.orange)};
  }
`
