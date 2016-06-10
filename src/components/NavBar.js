import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NavBar extends Component {
  render() {
    return (

      <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar">Tenants</span>
            <span className="icon-bar">Properties</span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/">Brand</Link>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
            <li><a href="#">Link</a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><Link to="tenants">Tenants</Link></li>
                <li><Link to="properties">Properties</Link></li>

              </ul>
            </li>
          </ul>

        </div>
      </div>
    </nav>

    )
  }
}
