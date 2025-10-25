import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Unauthorized, token missing",
      });
    }

     // Extract the token
    const token = authHeader.split(" ")[1];

    // 3. Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");

    if(!user){
        return res.status(401).json({
            success:false,
            message:"User not found or account deleted"
        })
    }

    // ✅ 5. Attach user info to request
    req.user = user;
    next();
  } catch (error) {
    if(error.name === "TokenExpiredError"){
        return res.status(401).json({ message: "Token expired, please log in again" });
    }else if(error.name === "JsonWebTokenError"){
        res.status(401).json({ message: "Invalid token" });

    }else{

        res.status(401).json({ message: "Internal server error" });
    }
  }
};


export const authorizeRoles = (...roles) => {
    return (req,res,next) => {
        if(!roles.includes(req.user.role)){
         return res.status(403).json({
            success:false,
            message:"Access denied. Insufficient permission."
         })
        }
        next()
    }
}