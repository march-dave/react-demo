import React, { Component } from 'react'

import AddTenantForm from './AddTenantForm'
import TenantsDisplay from './TenantsDisplay'

import TenantStore from '../stores/TenantStore'

let _getComponentState = () => {
  return {
    tenants: TenantStore.getAllTenants()
  }
}

export default class Tenants extends Component {

  constructor(props) {
    super(props);

    this.state = _getComponentState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    TenantStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    TenantStore.stopListening(this._onChange);
  }

  _onChange() {
    console.log('7. CHANGE event received in Tenants Component, updating state');
    this.setState(_getComponentState());
  }

  render() {
    return (
      <div className>
        <h1>Tenants Pages</h1>
        <AddTenantForm />
        <TenantsDisplay tenants={this.state.tenants}/>
      </div>
    )
  }

}
