const express = require("express")
const moment = require("moment")

const mongoose = require("mongoose")

const app = express()


const api = require("./routes/api")

const MONGO_URI = "mongodb+srv://mongo:mongo@cluster0.ggzkiyc.mongodb.net/?retryWrites=true&w=majority"


const dbConnect = async () => {

    await mongoose.connect( MONGO_URI )
    
    console.log( "db conectada" )
        
}


app.use( express.json() )


app.get("/", ( req, res )=>{

    res.send("Raíz")

})


app.use( "/api/v1", api )


app.get("/hola", ( req, res )=>{
    
    res.send("Hola mundo")
    
})

app.get("/hora", ( req, res )=>{

    const hora = moment().format("hh:mm")

    res.send( hora )

})



app.post("/hola", ( req, res )=>{
    
    res.send("prueba post")
    
})


app.listen( 3000, async ()=>{

    await dbConnect()

    console.log(`Aplicación escuchando en el puerto ${ 3000 }`)

})