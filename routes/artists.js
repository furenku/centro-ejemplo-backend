const express = require("express")

const controller = require("../controllers/artists")

const router = express.Router()

router.get("/", async (req,res) => {
    const artists = await controller.findAll()
    res.send( artists )

})

router.get("/:id", async (req,res) => {
    const id = req.params.id
    const artist = await controller.findOne( id )
    res.send( artist )
})

router.post("/", async (req,res) => {
    const createdArtist = await controller.createOne( req.body )
    res.send( createdArtist )
})


router.patch("/:id", async (req,res) => {

    const id = req.params.id

    const updatedArtist = await controller.update( id, req.body )

    res.send( updatedArtist )

})



router.delete("/all", async (req,res) => {

    await controller.deleteMany()

    res.send( "Artists deleted successfully" )

})



router.delete("/:id", async (req,res) => {

    const id = req.params.id

    await controller.deleteOne( id )

    res.send( "Artist deleted successfully" )

})

module.exports = router