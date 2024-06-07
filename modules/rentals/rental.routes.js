import express from 'express'
import { createRental, deleteRental, getAllRentals, getRental, updateRental } from './rentals.controllers.js'
import checkCar from '../../middlewares/checkCar.js'
const rentalRouter= express.Router()


rentalRouter.post('/',checkCar,createRental)
rentalRouter.put('/:id',updateRental)
rentalRouter.delete('/:id',deleteRental)
rentalRouter.get('/',getAllRentals)
rentalRouter.get('/:id',getRental)




export default rentalRouter