const mongoose = require('mongoose')
const Schema = mongoose.Schema

const citySchema = new Schema({
    name: String,
    temperature: Number,
    updatedAt: Date,
    condition: String,
    conditionPic: String,
    sunrise: String,
    sunset: String

})

const City = mongoose.model("City", citySchema)

module.exports = City
