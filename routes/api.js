const express = require("express")

const api = express.Router()

const controller = require("../controllers/artists")

api.get("/artistas", (req,res) => {
    const artists = controller.findAll()
    res.send( artists )

})

api.get("/artistas/:id", (req,res) => {
    const id = req.params.id
    const artist = controller.findOne( id )
    res.send( artist )
})

api.post("/artistas", (req,res) => {
const name = req.body.name
    const newArtist = {
        name
    }
    const createdArtist = controller.createOne( newArtist )
    res.send( createdArtist )
})

module.exports = api
