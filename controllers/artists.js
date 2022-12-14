// TODO: quitar cuando tengamos db:
// const fakeData = require("../test/data/artists.json")
// TODO: quitar cuando tengamos db:
// const artists = [ ...fakeData ]

const Artist = require("../models/Artist")

const findAll = async () => {
    const artists = await Artist.find({})
    return artists
}

const findOne = async id => {
    //    return artists.find( artist => artist.id == id )
    const artist = await Artist.findById( id )
    return artist

}

const createOne = async artist => {
    // const newArtist = {
    //     ...artist,
    //     id: artists.length + 1
    // }
    // artists.push( newArtist )
    // return newArtist
    
    const newArtist = new Artist( artist )

    const savedArtist = await newArtist.save()

    return savedArtist

}


const update = async ( id, data ) => {
    
    await Artist.updateOne(
        { _id: id },
        data
    ) 

    const updatedArtist = await Artist.findById( id )

    return updatedArtist

}


const deleteOne = async ( id ) => {

    await Artist.deleteOne({ _id: id })

}


const deleteMany = async () => {

    await Artist.deleteMany({})

}



module.exports = {
    findAll,
    findOne,
    createOne,
    update,
    deleteOne,
    deleteMany
}