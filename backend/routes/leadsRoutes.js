import express from 'express'
const router = express.Router()
import { addLeads } from '../controllers/leadsController.js'
import { Test } from '../controllers/TestController.js'

router.route('/').post(addLeads)
// router.route('/').get(Test)


export default router