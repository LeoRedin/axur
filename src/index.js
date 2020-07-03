import React from 'react'
import ReactDOM from 'react-dom'

import AppWrapper from 'components/AppWrapper'

import './normalize.css'
import App from './App'
import { GlobalStyle } from './theme/globalStyle'

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper>
      <GlobalStyle />
      <App />
    </AppWrapper>
  </React.StrictMode>,
  document.getElementById('root'),
)
