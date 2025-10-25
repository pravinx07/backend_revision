import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import userRouter from "./routes/user.router.js"

const app = express()
dotenv.config()
const PORT = process.env.PORT || 3000

app.use(express.json())

connectDB()
app.get("/",(req,res)=>{
    res.send("Hey there")
})

app.use("/api/users", userRouter)

app.listen(PORT, ()=>{
console.log(`Server is running on http://localhost:${PORT}`);

})
