import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styles'

export default function AppWrapper({ children }) {
  return <Container>{children}</Container>
}

AppWrapper.propTypes = {
  children: PropTypes.element.isRequired,
}
