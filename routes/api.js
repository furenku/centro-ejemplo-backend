const express = require("express")

const artistsRouter = require("./artists")
const venuesRouter = require("./venues")
const songsRouter = require("./songs")

const api = express.Router()

api.use("/artists/", artistsRouter )
api.use("/venues/", venuesRouter )
api.use("/songs/", songsRouter )

module.exports = api
