require('dotenv').config()
const express = require ('express')
const app = express ()

app.get ('/', (req, res) => {
    res.send ('Hello world!')
})


app.get('*', (req, rex) => {
    res.send ('<h1>404</h1> ') 
}) 


app.listen (process.env.PORT)