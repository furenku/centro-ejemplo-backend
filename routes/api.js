const express = require("express")

const api = express.Router()



api.get("/artistas", (req,res) => {

    res.send("Artistas")

})


api.get("/artistas/:id", (req,res) => {

    const id = req.params.id

    res.send("Artista: " + id )

})


api.post("/artistas", (req,res) => {

    const name = req.body.name

    res.send( "Nuevo Artista: " + name )

})




module.exports = api
