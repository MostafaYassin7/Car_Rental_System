import { db } from "../database/connection.js";
import bcrypt from 'bcrypt'
const signinValidation= async (req,res,next)=>{
        const {email,password}=req.body
        let user = await db.collection('customers').findOne({email:email})
        if(user){
            let isMatch = bcrypt.compareSync(password,user.password)
            if(isMatch){
                req.body.user=user
                return next()
            }else{
                return res.json({message: "email or password is incorrect"})
            }
        }
        res.json({message:"email or password is incorrect"})
    }

    export default signinValidation