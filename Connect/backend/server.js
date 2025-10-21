import express from "express"

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('dist'))

app.get("/",(req,res) => {
    res.send("Server is ready")
})


console.log(PORT);

// get a list of 5 jokes
app.get("/api/jokes", (req,res) => {
    const jokes = [
    {
      "id": 1,
      "setup": "Why do programmers prefer dark mode?",
      "punchline": "Because light attracts bugs!"
    },
    {
      "id": 2,
      "setup": "Why did the developer go broke?",
      "punchline": "Because he used up all his cache!"
    },
    {
      "id": 3,
      "setup": "How do you comfort a JavaScript bug?",
      "punchline": "You console it!"
    },
    {
      "id": 4,
      "setup": "Why do Java developers wear glasses?",
      "punchline": "Because they don't see sharp!"
    },
    {
      "id": 5,
      "setup": "What’s a programmer’s favorite hangout place?",
      "punchline": "Foo Bar!"
    }
  ]
  res.send(jokes)
})

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
    
})
