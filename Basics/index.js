import express from "express"
import dotenv from "dotenv"

const app = express()

// to access .env variables
dotenv.config()

const PORT = process.env.PORT || 4000


app.get("/", (req,res) => {
    res.send("Hey there")
})

app.get("/twitter", (req,res) => {
    res.send("pravin_07")
})

app.get("/login", (req,res) => {
    res.send("<h1>Please login at DevHub</h1>")
})
app.get("/youtube", (req,res) => {
    res.send("<a >youtube</a>")
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
    
})