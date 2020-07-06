import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import PostsScreen from 'views/Posts'
import Summary from 'views/Summary'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={PostsScreen} />
      <Route exact path="/summary" component={Summary} />
      <Redirect from="*" to="/" />
    </Switch>
  )
}
