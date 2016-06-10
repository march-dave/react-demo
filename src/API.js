import { get, post, ajax } from 'jquery'

import ServerActions from './actions/ServerActions'

const API = {
  getAllTenants() {
    get('/api/tenants')
      .done(response => { ServerActions.receiveTenants(response) })
  },

  addNewTenant(tenant) {
    ServerActions.receiveOneTenant(tenant)
    // post('/api/tenants', tenant)
    //   .done(response => { ServerActions.receiveOneTenant(response) })
  },

  updateTenant(tenant) {
    // ajax({
    //   url: '/api/tenants',
    //   method: 'PUT',
    //   contentType: 'application/json',
    //   data: JSON.stringify(tenant),
    //   success: (res) => {
    //     console.log(res);
    //   }
    // })
    fetch('/api/tenants', {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(tenant)
    })
      .then((res) => res.json())
      .then(data => {
        console.log(data);
      })
  },

  deleteTenant(tenantID) {
    fetch('/api/tenants/' + tenantID, {
      method: 'DELETE'
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        ServerActions.receiveTenants(data)
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export default API
