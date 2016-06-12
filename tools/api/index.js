import { Router } from 'express'
const router = Router();

import tenants from './tenants'

router.use('/tenants', tenants);
