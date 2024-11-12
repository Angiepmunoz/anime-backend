const express = require("express");
const animes = express.Router();
const animesArr = require("../data/animes")

animes.get("/", (request, response)=>{
    // console.log(animesArr);
    response.status(200).json(animesArr);
})




module.exports = animes;