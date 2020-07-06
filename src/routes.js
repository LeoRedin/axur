import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PostsScreen from 'views/Posts'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={PostsScreen} />
    </Switch>
  )
}
