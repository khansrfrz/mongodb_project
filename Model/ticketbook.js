const mongoose = require('mongoose')

const TicketSchema = new mongoose.Schema({
    Name:{type:String,required:true},
    Age:{type:Number,required:true},
    Address:{type:String,required:true},
    date:{type:Date,default:Date.now}
},{
    versionKey:false
})

const bookModel = mongoose.model('ticketbook',TicketSchema)

module.exports = bookModel