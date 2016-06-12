import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import './style/app.scss'

import App from './components/App'
import Dashboard from './components/Dashboard'
import Tenants from './components/Tenants'
import Properties from './components/Properties'

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="tenants" component={Tenants} />
      <Route path="properties" component={Properties} />
    </Route>
  </Router>,
  document.getElementById('root')
)
