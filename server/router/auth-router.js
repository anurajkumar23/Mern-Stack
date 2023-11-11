const express = require("express");
const router = express.Router();



router.route("/").get((req, res) => {
    res.status(200).send("Welcome to Anuraj kumar server using router again")
});

router.route("/register").get((req, res) =>{
    res.status(200).send("Welcome to register page of Anuraj kumar server using router")
});


module.exports = router;
