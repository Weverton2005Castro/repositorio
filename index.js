const express = require("express")
const routes = require ('./routes/routes')
const app = express ()
const port = 30000

app.use ('/', routes)

app.listen (3000, () =>{
    console.log (`app rodando na porta 3000`)
})