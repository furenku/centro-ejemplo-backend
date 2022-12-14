const express = require("express")

const controller = require("../controllers/songs")

const router = express.Router()

router.get("/", async (req,res) => {
    const songs = await controller.findAll()
    res.send( songs )

})

router.get("/:id", async (req,res) => {
    const id = req.params.id
    const song = await controller.findOne( id )
    res.send( song )
})

router.post("/", async (req,res) => {
    const name = req.body.name
    const newSong = {
        name
    }
    const createdSong = await controller.createOne( newSong )
    res.send( createdSong )
})


router.patch("/:id", async (req,res) => {

    const id = req.params.id

    const updatedSong = await controller.update( id, req.body )

    res.send( updatedSong )

})



router.delete("/:id", async (req,res) => {

    const id = req.params.id

    await controller.deleteOne( id )

    res.send( "Song deleted successfully" )

})


module.exports = router