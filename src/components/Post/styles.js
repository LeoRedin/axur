import styled from 'styled-components'
import { lighten } from 'polished'
import { color } from 'theme/colors'

export const Container = styled.div`
  margin: 20px;
  width: 320px;
  background: rgb(255, 255, 255) none repeat scroll 0% 0%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
  border-radius: 5px;
  padding: 30px 30px 60px;
  position: relative;
`
export const Title = styled.h2`
  margin-top: 0px;
`

export const Body = styled.div`
  margin: 16px 0px 0px;
`

export const AuthorWrapper = styled.div`
  width: 100%;
`

export const Author = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
  border-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-color: ${color.red};
  color: rgb(255, 255, 255);
  padding: 8px 0;
  cursor: pointer;
  border: 1px solid ${color.red};
  transition: all 100ms ease 0s;

  :hover {
    background-color: ${lighten(0.2, color.red)};
  }
`

export const Published = styled.div`
  margin-top: 15px;
`
