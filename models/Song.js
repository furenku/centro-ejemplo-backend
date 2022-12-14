const mongoose = require("mongoose")

const { Schema } = mongoose

const songSchema = new Schema({

    name: String

})


const Song = mongoose.model("Song", songSchema)

module.exports = Song