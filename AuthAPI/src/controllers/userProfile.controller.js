import express from "express";
import { authMiddleware ,authorizeRoles} from "../middlewares/authMiddleware.js";

const router = express.Router()

router.get("/profile", authMiddleware, (req,res) => {
    res.json({
        success:true,
        message:"Access granted",
        user:req.user
    })
})

router.get("/admin", authMiddleware, authorizeRoles("admin"), (req, res) => {
  res.json({ message: "Admin dashboard" });
});


export default  router