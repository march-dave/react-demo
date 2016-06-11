import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveTenants(tenants) {
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_TENANTS',
      tenants
    });
  },
  receiveOneTenant(tenant) {
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_ONE_TENANT',
      tenant
    })
  }
}

export default ServerActions
