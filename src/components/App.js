import React, { Component } from 'react'
import NavBar from './NavBar'
import Dashboard from './Dashboard'
import Tenants from './Tenants'

export default class App extends Component {
  render() {

    return (
      <div>
        <NavBar />
          <div className="container">
            {this.props.children}
          </div>
        
      </div>
    )

  }
}
