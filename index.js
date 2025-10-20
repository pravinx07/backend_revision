import express from "express"
import dotenv from "dotenv"

const app = express()

// to access .env variables
dotenv.config()

const PORT = process.env.PORT || 4000

const myGithub = {
    "login": "mojombo",
    "id": 1,
    "node_id": "MDQ6VXNlcjE=",
    "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mojombo",
    "html_url": "https://github.com/mojombo",
    "followers_url": "https://api.github.com/users/mojombo/followers",
    "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
    "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
    "organizations_url": "https://api.github.com/users/mojombo/orgs",
    "repos_url": "https://api.github.com/users/mojombo/repos",
    "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mojombo/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false
}

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
    res.send("<p>Please go to YoutTube</p>")
})

app.get("/github",(req,res) => {
    res.json(myGithub)
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
    
})