const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    flightNo:{type:Number,required:true},
    Travel_btw_cities:{type:String,required:true},
    flight_Timings:{type:String,required:true},
    plane_Category:{type:String,required:true}
}, {
    versionKey:false
})

const flightModel = mongoose.model('flightdetails',UserSchema)

module.exports = flightModel