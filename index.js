import express from 'express'
import carRouter from './modules/cars/cars.routes.js'
import customersRouter from './modules/customers/customers.routes.js'
import rentalRouter from './modules/rentals/rental.routes.js'
import specialRouter from './modules/specialAPIs/special.routes.js'


const app = express()
const PORT=3000
app.use(express.json())
app.use('/cars',carRouter)
app.use('/auth',customersRouter)
app.use('/customers',customersRouter)
app.use('/rentals',rentalRouter)
app.use('/available',specialRouter) //get available cars of specefic model
app.use('/model',specialRouter) // get rented cars or spesefic model
app.use('/query',specialRouter) /* get Get Available Cars of Specific Models 
                                or Rented Cars of a specefic model*/





app.listen(PORT,()=>console.log("server is running"))