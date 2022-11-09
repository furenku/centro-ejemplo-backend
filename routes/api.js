const express = require("express")

const api = express.Router()

const controller = require("../controllers/artists")

api.get("/artists", async (req,res) => {
    const artists = await controller.findAll()
    res.send( artists )

})

api.get("/artists/:id", async (req,res) => {
    const id = req.params.id
    const artist = await controller.findOne( id )
    res.send( artist )
})

api.post("/artists", async (req,res) => {
const name = req.body.name
    const newArtist = {
        name
    }
    const createdArtist = await controller.createOne( newArtist )
    res.send( createdArtist )
})

module.exports = api
