import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { PostsScreen, Summary } from 'views'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={PostsScreen} />
      <Route exact path="/summary" component={Summary} />
      <Redirect from="*" to="/" />
    </Switch>
  )
}
