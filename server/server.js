require("dotenv").config();
const express = require("express")
const app = express();
const router = require("./router/auth-router")
const connectDB = require("./utils/db")


app.use(express.json());

app.use("/api/auth", router)


connectDB().then(() =>{ 
const PORT = 8000;
app.listen(PORT, ()=> console.log(`Server is running on port: ${PORT}`))
})