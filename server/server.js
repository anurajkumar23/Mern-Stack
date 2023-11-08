const express = require("express")
const app = express();

app.get("/", (req, res) =>{
    res.status(200).send("Welcome to my server of Anuraj kumar Mernstack website")
})

const PORT = 8000;
app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))