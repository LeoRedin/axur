import React from 'react'
import { Router } from 'react-router-dom'

import history from 'services/history'
import { Header } from 'components'

import Routes from './routes'

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
    </Router>
  )
}

export default App
