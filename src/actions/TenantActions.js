import API from '../API'

const TenantActions = {
  getAllTenants() {
    API.getAllTenants();
  },
  addNewTenant(tenant) {
    API.addNewTenant(tenant);
  },
  updateTenant(tenant) {
    API.updateTenant(tenant);
  },
  deleteTenant(id) {
    API.deleteTenant(id);
  }
}

export default TenantActions
