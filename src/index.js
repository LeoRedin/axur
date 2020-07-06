import React from 'react'
import ReactDOM from 'react-dom'

import { AppWrapper } from 'components'
import { GlobalStyle } from 'theme'

import './normalize.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper>
      <GlobalStyle />
      <App />
    </AppWrapper>
  </React.StrictMode>,
  document.getElementById('root'),
)
