import { ObjectId } from "mongodb";
import { db } from "../../database/connection.js";


const createRental=(req,res)=>{
    db.collection('cars').updateOne({_id:new ObjectId(req.car._id)},{$set:{rentalStatus:"rented"}})
    req.body.customerId= new ObjectId(req.body.customerId)
    db.collection('rentals').insertOne(req.body)
    res.status(201).json({message:"success"})
}

const updateRental= (req,res)=>{
    db.collection('rentals').updateOne({_id:new ObjectId(req.params.id)},
{$set:{returnDate:req.body.returnDate}})
res.status(200).json({message:"success"})
}

const deleteRental= (req,res)=>{
    db.collection('cars').updateOne({_id:new ObjectId(req.body.carId)},{$set:{rentalStatus:"available"}})
    db.collection('rentals').deleteOne({_id:new ObjectId(req.params.id)})
res.status(200).json({message:"success"})
}

const getAllRentals= async (req,res)=>{
    const rentals= await db.collection('rentals').aggregate([{$lookup:{
        from:"customers",
        localField:"customerId",
        foreignField: "_id",
        as: "car_rented_to"
    }},{$project:{"car_rented_to.password":0}}]).toArray()
    res.status(200).json(rentals)
}

const getRental= async (req,res)=>{
    const rental = await db.collection('rentals')
    .aggregate([{$match:{_id:new ObjectId(req.params.id)}},
        {$lookup:{
        from: "customers",
        localField: "customerId",
        foreignField: "_id",
        as: "car_rented_to"
    }},{$project:{"car_rented_to.password":0}}]).toArray()
    res.status(200).json(rental)
}

export{
    createRental,
    updateRental,
    deleteRental,
    getAllRentals,
    getRental,
}