const express = require('express')
const router = express.Router()
const moment = require('moment')
const City = require('../models/City')
const request = require('request')
const apiKey = "974200348f3d4230af8101511191707"



//api call
router.get('/city/:cityName', function (req, res) {
    let cityName = req.params.cityName
    
    request(`https://api.apixu.com/v1/forecast.json?key=${apiKey}&q=${cityName}`, function(err, response, body){
    let myData = JSON.parse(response.body || "{}") // all the api is in body object
    
    citiesObj = {}


    citiesObj.name = myData.location.name
    citiesObj.temperature = myData.current["temp_c"]
    citiesObj.updateAt = myData.current.last_updated
    citiesObj.condition = myData.current.condition.text
    citiesObj.conditionPic = myData.current.condition.icon
    citiesObj.sunrise = myData.forecast.forecastday[0].astro.sunrise
    citiesObj.sunset = myData.forecast.forecastday[0].astro.sunset

    
    
    res.send(citiesObj) 
     })
     
})



// find all of the city data from DB
router.get('/cities', function (req, res) {
  City.find({}).exec(function(err, data){
    res.send(data)
   })
 
})

//=============================================




//take some data from the body, and save it as a new City to your DB

router.post('/city', function (req, res) { 
    let newCity = new City(req.body)
    newCity.save()
    res.end() 

})
 //===========================================




 router.delete('/city/:cityName', function (req, res) {
    let cityName = req.params.cityName
    City.findOneAndRemove( {name: cityName} , function (err, city) {
        res.end()
    })

 })




router.get('/', function (request, response) {
    console.log('Someone has come into the server. Brace yourselves.')
    response.send('Ending the cycle, thanks for visiting')  
})


// router.put('/city/:cityName', function (req, res) {
//     console.log("Update is working")
//     let cityName = req.params.cityName
    
//     request(`https://api.apixu.com/v1/forecast.json?key=${apiKey}&q=${cityName}`, function(err, response, body){
//     let myData = JSON.parse(response.body || "{}") // all the api is in body object
//     citiesObj = {}

//     citiesObj.name = myData.location.name
//     citiesObj.temperature = myData.current["temp_c"]
//     citiesObj.updateAt = myData.current["last_updated"]
//     citiesObj.condition = myData.current.condition.text
//     citiesObj.conditionPic = myData.current.condition.icon
//     citiesObj.sunrise = myData.forecast.forecastday[0].astro.sunrise
//     citiesObj.sunset = myData.forecast.forecastday[0].astro.sunset


//     
//     res.send(citiesObj) 

// })

// })


module.exports = router