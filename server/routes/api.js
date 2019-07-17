const express = require('express')
const router = express.Router()
const moment = require('moment')
const City = require('../models/City')
const request = require('request') //install
const apiKey = "974200348f3d4230af8101511191707"



//api call
router.get('/city/:cityName', function (req, res) {
    let cityName = req.params.cityName
    
    request(`https://api.apixu.com/v1/forecast.json?key=${apiKey}&q=${cityName}`, function(err, response, body){
    let myData = JSON.parse(response.body || "{}") // all the api is in body object
    
    citiesObj = {}

    citiesObj.name = myData.location.name
    citiesObj.temperature = myData.current["temp_c"]
    citiesObj.updateAt = myData.current["last_updated"]
    citiesObj.condition = myData.current.condition.text
    citiesObj.conditionPic = myData.current.condition.icon
    
    res.send(citiesObj) 
     })
})



// find all of the city data saved in your DB
router.get('/cities', function (req, res) {
   // This route should find all of the city data saved in your DB, and send it to the client
   City.find({}).exec(function(err, data){
    res.send(data)
   })
 res.send(data) 
})

//=============================================




//take some data from the body, and save it as a new City to your DB

router.post('/city', function (req, res) {
    let data = req.body

    let newCity = new City(data)
    newCity.save()

    res.end() 
 })

 //===========================================






 router.delete('/city/:cityName', function (req, res) {
    let cityName = req.params.cityName
    // This route should take a cityName parameter
// This route should find the city's data in your DB and remove it from your DB
    City.findOne( { name: cityName } , function (err, city) {
        city.remove(function (err) {
            console.log(err) 
        })
}   )
 
 res.end()
 })




router.get('/', function (request, response) {
    console.log('Someone has come into the server. Brace yourselves.')
    response.send('Ending the cycle, thanks for visiting')  
})

module.exports = router