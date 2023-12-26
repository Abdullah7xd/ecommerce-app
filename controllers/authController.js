// import userModel from "../models/userModel.js"
// import userModel from "../config/models/userModel.js";
import userModel from "../models/userModel.js";
import router from "../routes/authRoute.js";
import { comparePassword, hashPassword } from "./../helper/authHelper.js";
import JWT from "jsonwebtoken";
export const registerController = async(req,res) =>{
    try {
       const {name,email,password,phone,address}= req.body
       //validations
       if(!name){
        return res.send({error: 'Name is required'})
       } 
       if(!email){
        return res.send({error: 'email is required'})
       } 
       if(!password){
        return res.send({error: 'password is required'})
       } 
       if(!phone){
        return res.send({error: 'phone is required'})
       } 
       if(!address){
        return res.send({error: 'address is required'})
       }
       const existingUser = await userModel.findOne({email})
       //existing user
       if(existingUser){
        return res.status(200).send({
            success: true,
            message:'Already Register please login',
        })
       } 
       //register user
       const hashedPassword = await hashPassword(password);
       //save password
       const user = await new userModel({
        name,
        email,
        phone,
        address,
        password: hashedPassword,
       }).save()

       res.status(201).send({
        success:true,
        message:'user Register Successfully',
        user,
       })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message:'Error in Registration',
            error
        })
        
    }

};

//POST LOGIN
export const loginController = async(req,res) =>{
    try {
        const {email,password} = req.body
        //validation
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:'Invalid email or password'
            })
        }
        // check user
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Email is not registered'
            })
        }
        //token
        const token = await JWT.sign({id})
        const match = await comparePassword(password,user.password)//for comparing users
        if(!match){
            return res.status(200).send({
                success:false,
                message:'Invalid password'
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message:'Error in login',
            error
        })
        
    }

};
