import mongoose, { Schema } from 'mongoose'

let Tenant;

let tenantSchema = Schema({
  name: String,
  email: String
});


Tenant = mongoose.model('Tenant', tenantSchema);

export default Tenant;
