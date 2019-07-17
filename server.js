const express = require('express') 
const app = express()
const api = require( './server/routes/api' )
const path = require('path')
const bodyParser = require('body-parser') 
const mongoose = require('mongoose')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect('mongodb://localhost/weatherDB', { useNewUrlParser: true })

app.use(express.static(path.join(__dirname, 'dist'))) 
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.static(path.join(__dirname, 'img')))

app.use('/', api)

const port = 3000
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})
