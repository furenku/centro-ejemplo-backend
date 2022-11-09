// TODO: quitar cuando tengamos db:
const fakeData = require("../test/data/artists.json")
// TODO: quitar cuando tengamos db:
const artists = [ ...fakeData ]

const findAll = () => {
        return artists
}

const findOne = id => {
        
    return artists.find( artist => artist.id == id )
}

const createOne = artist => {
        const newArtist = {
        ...artist,
        id: artists.length + 1
    }
        artists.push( newArtist )
    
    return newArtist
}

module.exports = {
    findAll,
    findOne,
    createOne
}