const mongoose = require("mongoose")

const { Schema } = mongoose

const venueSchema = new Schema({

    name: String

})


const Venue = mongoose.model("Venue", venueSchema)

module.exports = Venue