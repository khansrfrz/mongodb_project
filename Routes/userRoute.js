const express = require('express');
const router = express.Router();
const flightModel = require('../Model/flightdetails')
const bookModel = require('../Model/ticketbook')
const UserData = require('../DB/data')


router.post('/get',(req,res)=>{
    flightModel.create(UserData,(err,data)=>{
        if(!err){
            res.status(200)
            res.json({
                "msg":"Ticket Booked",
                data:data
        })
        }
        else{
            res.status(404)
            res.json("something is wrong")
        }
    })  
})


router.get('/book',(req,res)=>{
    bookModel.create(UserData,(err,data)=>{
        if(!err){
            res.status(200)
            res.json({
                data:data
            })
        }
        else{
            res.status(404)
            res.json("error occured")
        }
    })
})

module.exports = router
