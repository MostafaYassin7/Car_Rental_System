import express from 'express'
import { deleteCustomer, getAllCustomers, getCustomer, signin, signup, updateCustomer} from './customers.controllers.js'
import checkEmailExist from '../../middlewares/checkEmailExist.js'
import signinValidation from '../../middlewares/signinValidation.js'
const customersRouter= express.Router()

customersRouter.post('/signup',checkEmailExist,signup)
customersRouter.post('/signin',signinValidation,signin)
customersRouter.get('/',getAllCustomers)
customersRouter.get('/:id',getCustomer)
customersRouter.put('/:id',signinValidation,updateCustomer)
customersRouter.delete('/:id',signinValidation,deleteCustomer)


export default customersRouter