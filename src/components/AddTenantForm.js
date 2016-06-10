import React, { Component } from 'react'

import TenantActions from '../actions/TenantActions'

export default class AddTenantForm extends Component {

constructor(props) {
  super(props);

  this.state = {
    name: ''
  }

  this.onSubmit = this.onSubmit.bind(this)
}

onSubmit(event) {
  event.preventDefault();
  console.log('1. On Submit clicked, sendint addNewTenant action with', this.state);

  TenantActions.addNewTenant(this.state);
  this.setState({name: ''});
}

  render() {
    return (
      <form>
        <div className="form-group">
          <input type="text"
              className="form-control"
              id="tenantName"
              placeholder="Bob Jones"
              value={this.state.name}
              onChange = {e => this.setState({name: e.target.value})}
            />
        </div>
        <button className="btn btn-default"
              onClick={this.onSubmit}
              >Submit</button>
      </form>
    )
  }

}
