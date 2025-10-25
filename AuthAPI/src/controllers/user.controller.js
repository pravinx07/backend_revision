import User from "../models/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
  
    console.log(name, email, password);
  
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "all feilds must be required",
      });
    }
  
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "user already exist ",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10)
  
    const user = await User.create({
      name,
      email,
      password:hashedPassword
    })
  
    res.status(201).json({
      success:true,
      message:"User created successfully",
      user:{
        id:user._id,
        name:user.name,
        email:user.email
      }
    })
  } catch (error) {
    res.status(400).json({
    message:"Error while creating user", error
    })
    
  }
};


export const loginUser = async(req,res) => {
   try {
     const {email, password} = req.body;
 
     if(!email.trim() || !password.trim()){
         return res.status(400).json({
             message:"all feilds must be required"
         })
     }
 
     const user = await User.findOne({email:email.toLowerCase()})
     if(!user){
       return res.status(404).json({
         message:"User not exist"
       })
     }
 
     const isPasswordMatch = await bcrypt.compare(password, user.password)
     if(!isPasswordMatch){
         return res.status(401).json({
             message:"invalid credentials"
         })
     }

     const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{
      expiresIn:process.env.JWT_EXPIRES_IN
     })
     
     // success
     res.status(200).json({
         message:"Login successfully",
         token,
         user:{
             id:user._id,
             name:user.name,
             email:user.email
         }
     })
   } catch (error) {
    console.error("Login Error", error)
    res.status(500).json({message:"Server error"})
   }
}