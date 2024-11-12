const express = require("express") // dependency // require express from node modules
const app = express() // configuration // storing an instance of express in our app variable 
const animesController = require("./controllers/animes")

// any function with access to the request and response object is called middleware
app.get("/", (request, response)=>{
    // console.log(request)
    response.send("Welcome to Animania")
})

app.use("/animes", animesController)

// our routes are setup to listen to requests to their specific URL/ path



module.exports = app;