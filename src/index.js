import React from 'react';
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/App'
import Tenants from './components/Tenants'
import Dashboard from './components/Dashboard'

render(
  <Router history={browserHistory}>
      <Route path='/' component={App}>
          <IndexRoute component={Dashboard} />
          <Route path='tenants' component={Tenants} />
      </Route>
  </ Router>,
  document.getElementById('root')
)
