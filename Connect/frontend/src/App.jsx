
import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
const [jokes, setJokes] = useState([])

useEffect(()=>{
 axios.get("/api/jokes")
 .then( (res) =>{
  setJokes(res.data)
 }).catch((err) =>{
  console.log(err);
  
 })
 
},[])
  return (
  <div>
     <h1>Hello Pravin</h1>
   <p>Jokes: {jokes.length}</p>
   {jokes.map((joke) => {
    return <div key={joke.id}>
      <h3>{joke.setup}</h3>
      <p>{joke.punchline}</p>
      
    </div>
   })}
  </div>
  )
}

export default App
