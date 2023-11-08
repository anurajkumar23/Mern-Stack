const express = require("express")
const app = express();

app.get("/", (req, res) =>{
    res.status(200).send("Welcome to my server of Anuraj kumar Mernstack website")
})

app.get("/register" , (req,res) => {
    res.status(200).send("Welcome to register Page")
})

const PORT = 8000;
app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))