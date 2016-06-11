import React, { Component } from 'react'
import Tenant from './Tenant';

export default class TenantsDisplay extends Component {
  constructor(props){
    super(props);

  }

  render() {
    let { tenants } = this.props
    let display = tenants.length && tenants.map(tenant => <Tenant key={tenant._id} tenant={tenant} />);

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="text-left">
          {display || 'No Tenants To Display'}
        </tbody>
      </table>
    )
  }
}
