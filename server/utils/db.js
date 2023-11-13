const mongoose = require("mongoose");


const URI = process.env.MONGODB_URI;

const connectDB = async() =>{
try {
    await mongoose.connect(URI)
    console.log("connection successfully ")
} catch (error) {
    console.error("Database connection fail");
    process.exit(0);
}
}

module.exports = connectDB