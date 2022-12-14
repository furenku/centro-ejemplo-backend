// TODO: quitar cuando tengamos db:
// const fakeData = require("../test/data/songs.json")
// TODO: quitar cuando tengamos db:
// const songs = [ ...fakeData ]

const Song = require("../models/Song")

const findAll = async () => {
    const songs = await Song.find({})
    return songs
}

const findOne = async id => {
    //    return songs.find( song => song.id == id )
    const song = await Song.findById( id )
    return song

}

const createOne = async song => {
    // const newSong = {
    //     ...song,
    //     id: songs.length + 1
    // }
    // songs.push( newSong )
    // return newSong
    
    const newSong = new Song( song )

    const savedSong = await newSong.save()

    return savedSong

}


const update = async ( id, data ) => {
    
    await Song.updateOne(
        { _id: id },
        data
    ) 

    const updatedSong = await Song.findById( id )

    return updatedSong

}


const deleteOne = async ( id ) => {

    await Song.deleteOne({ _id: id })

}


module.exports = {
    findAll,
    findOne,
    createOne,
    update,
    deleteOne
}