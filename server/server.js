const express = require("express")
const app = express();
const router = require("./router/auth-router")

app.use("/api/auth", router)

const PORT = 8000;
app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))