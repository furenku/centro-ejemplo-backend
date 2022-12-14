const express = require("express")

const controller = require("../controllers/venues")

const router = express.Router()

router.get("/", async (req,res) => {
    const venues = await controller.findAll()
    res.send( venues )

})

router.get("/:id", async (req,res) => {
    const id = req.params.id
    const venue = await controller.findOne( id )
    res.send( venue )
})

router.post("/", async (req,res) => {
    const name = req.body.name
    const newVenue = {
        name
    }
    const createdVenue = await controller.createOne( newVenue )
    res.send( createdVenue )
})


router.patch("/:id", async (req,res) => {

    const id = req.params.id

    const updatedVenue = await controller.update( id, req.body )

    res.send( updatedVenue )

})



router.delete("/:id", async (req,res) => {

    const id = req.params.id

    await controller.deleteOne( id )

    res.send( "Venue deleted successfully" )

})


module.exports = router