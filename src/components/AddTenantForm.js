import React, { Component } from 'react'

import TenantActions from '../actions/TenantActions'

export default class AddTenantForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      email: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    if (!this.state.name.length || !this.state.email.length) return;
    TenantActions.addNewTenant(this.state);
    this.setState({name: '', email: ''})
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="tenantName">Name</label>
          <input type="text"
                 className="form-control"
                 id="tenantName"
                 placeholder="Bob Jones"
                 value={this.state.name}
                 onChange={e => this.setState({name: e.target.value})}
                 />
        </div>
        <div className="form-group">
          <label htmlFor="tenantEmail">Email</label>
          <input type="email"
                 className="form-control"
                 id="tenantEmail"
                 placeholder="bob@jones.com"
                 value={this.state.email}
                 onChange={e => this.setState({email: e.target.value})}
                 />
        </div>
        <button className="btn btn-default"
                onClick={this.onSubmit}
                >Submit</button>
      </form>
    )
  }
}
