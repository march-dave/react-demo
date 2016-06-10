import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _tenants = [];

class TenantStore extends EventEmitter {
  constructor(props){
    super(props);

    AppDispatcher.register(action => {
      switch(action.actionType) {
        case 'RECEIVE_TENANTS':
          _tenants = action.tenants;
          this.emit('CHANGE');
          break;
        case 'RECEIVE_ONE_TENANT':
          _tenants.push(action.tenant);
          this.emit('CHANGE');
          break;
      }
    });
  }

  getAllTenants() {
    return _tenants;
  }

  startListening(cb) {
    this.on('CHANGE', cb)
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb)
  }
}

export default new TenantStore();
