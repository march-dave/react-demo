import { Router } from 'express'
const router = Router();

import Tenant from '../db/Tenant'

router.get('/', (req, res) => {
  Tenant.find({}, (err, tenants) => {
    return res.status(err ? 400 : 200).send(err || tenants);
  })
})

router.post('/', (req, res) => {
  Tenant.create(req.body, (err, tenant) => {
    return res.status(err ? 400 : 200).send(err || tenant);
  })
})

router.put('/', (req, res) => {
  console.log(req.body);
  Tenant.findByIdAndUpdate(req.body._id, req.body, 'new', (err, tenant) => {
    if (err) return res.status(400).send(err);
    Tenant.find({}, (err, tenants) => {
      return res.status(err ? 400 : 200).send(err || tenants)
    })
  });
})

router.delete('/:id', (req, res) => {
  Tenant.findByIdAndRemove(req.params.id, (err, removed) => {
    if (err) return res.status(400).send(err);
    Tenant.find({}, (err, tenants) => {
      return res.status(err ? 400 : 200).send(err || tenants)
    })
  })
})

export default router
