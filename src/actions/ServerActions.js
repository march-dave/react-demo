import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveOneTenant(tenant) {
    console.log('5. In server actions, dispatch RECEIVE_ONE_TENANT with: ', tenant);
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_ONE_TENANT',
      tenant
    })
  }
}

export default ServerActions
