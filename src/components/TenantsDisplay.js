import React, { Component } from 'react'

import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

export default class Tenants extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {tenants} = this.props;

  let display = tenants.length && tenants.map(tenant => {
    return <li>{tenant.name}</li>
  })

  return(
    <ul>
      {display || 'No Tenants'}
    </ul>
  )

  }
}
