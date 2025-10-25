import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import noteRoutes from "./routes/noteRoutes.js"

dotenv.config()
const PORT = process.env.PORT || 5000

const app = express();
app.use(express.json());

app.get("/",(req,res) => {
    res.send("Hey there ")
})

app.use("/api/notes",noteRoutes)


connectDB()
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    
})