import styled from 'styled-components'
import { color } from 'theme'

export const Container = styled.div`
  width: 100%;
  margin: 0px auto;
  max-width: 90vw;
  padding: 40px;
`
export const PostsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const FilterLabel = styled.h3``

export const AuthorLabel = styled.div`
  padding: 8px 10px;
  border-radius: 3px;
  background: transparent none repeat scroll 0% 0%;
  cursor: pointer;

  &:hover {
    color: ${color.orange};
  }

  color: ${({ active }) => (active ? color.orange : 'inherit')};
`

export const Authors = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const DateOrder = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const DateOption = styled.div`
  padding: 8px 10px;
  border-radius: 3px;
  background: transparent none repeat scroll 0% 0%;
  cursor: pointer;

  &:hover {
    color: ${color.orange};
  }

  color: ${({ active }) => (active ? color.orange : 'inherit')};
`
