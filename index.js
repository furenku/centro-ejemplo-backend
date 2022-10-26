const express = require("express")

const app = express()

const moment = require("moment")

const api = require("./routes/api")


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


app.listen( 3000, ()=>{

    console.log(`Aplicación escuchando en el puerto ${ 3000 }`)

})