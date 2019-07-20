const mongoose = require('mongoose')
const Schema = mongoose.Schema

const citySchema = new Schema({
    name: String,
    temperature: Number,
    updateAt: Date,
    condition: String,
    conditionPic: String,
    sunrise: String,
    sunset: String,
    isSaved: Boolean

})

const City = mongoose.model("City", citySchema)

module.exports = City