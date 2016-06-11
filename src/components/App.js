import React, { Component } from 'react'
import { Link } from 'react-router'
import NavBar from './NavBar'

export default class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="text-center">
        <NavBar />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
