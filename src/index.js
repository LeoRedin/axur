import React from 'react'
import ReactDOM from 'react-dom'

import AppWrapper from 'components/AppWrapper'

import './normalize.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper>
      <App />
    </AppWrapper>
  </React.StrictMode>,
  document.getElementById('root'),
)
