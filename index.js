const express = require("express")

const app = express()

const moment = require("moment")

app.get("/", ( req, res )=>{

    res.send("Raíz")

})

app.get("/hola", ( req, res )=>{
    
    res.send("Hola mundo")
    
})

app.get("/hora", ( req, res )=>{

    const hora = moment().format("hh:mm")

    res.send( hora )

})


app.listen( 3000, ()=>{

    console.log(`Aplicación escuchando en el puerto ${ 3000 }`)

})