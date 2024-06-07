import { ObjectId } from "mongodb";
import { db } from "../../database/connection.js";
import bcrypt from 'bcrypt'
const signup= (req,res)=>{
    const {password}=req.body
    req.body.password=bcrypt.hashSync(password,8)
    db.collection('customers').insertOne(req.body)
    res.status(201).json({message:"success"})
}

const signin=(req,res)=>{
    res.json(req.body.user._id)
}

const getAllCustomers= async (req,res)=>{
    const users= await db.collection('customers').find({},{projection:{_id:0}}).toArray()
    res.status(200).json({users})
}

const getCustomer= async (req,res)=>{
    const user = await db.collection('customers').findOne({_id:new ObjectId(req.params.id)},{projection:{_id:0}})
    res.status(200).json({user})
}

const updateCustomer= (req,res)=>{
    const {password}=req.body
    req.body.password=bcrypt.hashSync(password,8)
    db.collection('customers').updateOne({_id:new ObjectId(req.params.id)},
    {$set:{name:req.body.name,phoneNumber:req.body.phoneNumber}})
    res.status(200).json({message:"success"})
}

const deleteCustomer= (req,res)=>{
    db.collection('customers').deleteOne({_id:new ObjectId(req.params.id)})
    res.status(200).json({message:"deleted"})
}
export {
    signup,
    signin,
    getAllCustomers,
    getCustomer,
    updateCustomer,
    deleteCustomer
}