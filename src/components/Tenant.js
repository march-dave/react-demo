import React, { Component } from 'react'

import TenantActions from '../actions/TenantActions'

export default class Tenant extends Component {
  constructor(props){
    super(props);

    this.state = {
      editing: false,
      tenant: {}
    }

    this.editTenant = this.editTenant.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
  }

  updateName(e) {
    let tenant = this.state.tenant;
    tenant.name = e.target.value;
    this.setState(tenant)
  }
  updateEmail(e) {
    console.log(this.state.tenant)
    let tenant = this.state.tenant;
    tenant.email = e.target.value;
    this.setState(tenant)
  }

  editTenant() {
    if (!this.state.editing) {
      this.setState({
        tenant: this.props.tenant,
        editing: !this.state.editing
      })
    } else {
      console.log(this.state.tenant)
      TenantActions.updateTenant(this.state.tenant)
      this.setState({
        tenant: {},
        editing: !this.state.editing
      })
    }
  }

  render() {
    let { _id, name, email } = this.props.tenant

    let nameDisplay = this.state.editing ? <input onChange={this.updateName} defaultValue={name} /> : name
    let emailDisplay = this.state.editing ? <input onChange={this.updateEmail} defaultValue={email} /> : email

    return (
      <tr>
        <td>{nameDisplay}</td>
        <td>{emailDisplay}</td>
        <td>
          <button onClick={this.editTenant}>{this.state.editing ? 'Confirm' : 'Edit'}</button>
        </td>
        <td>
          <button onClick={() => TenantActions.deleteTenant(_id)}>Delete</button>
        </td>
      </tr>
    )
  }
}
