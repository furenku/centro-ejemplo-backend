// TODO: quitar cuando tengamos db:
// const fakeData = require("../test/data/venues.json")
// TODO: quitar cuando tengamos db:
// const venues = [ ...fakeData ]

const Venue = require("../models/Venue")

const findAll = async () => {
    const venues = await Venue.find({})
    return venues
}

const findOne = async id => {
    //    return venues.find( venue => venue.id == id )
    const venue = await Venue.findById( id )
    return venue

}

const createOne = async venue => {
    // const newVenue = {
    //     ...venue,
    //     id: venues.length + 1
    // }
    // venues.push( newVenue )
    // return newVenue
    
    const newVenue = new Venue( venue )

    const savedVenue = await newVenue.save()

    return savedVenue

}


const update = async ( id, data ) => {
    
    await Venue.updateOne(
        { _id: id },
        data
    ) 

    const updatedVenue = await Venue.findById( id )

    return updatedVenue

}


const deleteOne = async ( id ) => {

    await Venue.deleteOne({ _id: id })

}


module.exports = {
    findAll,
    findOne,
    createOne,
    update,
    deleteOne
}