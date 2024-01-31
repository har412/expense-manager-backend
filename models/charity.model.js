const mongoose = require('mongoose')

const charitySchema = new mongoose.Schema(
    {
        amount:{
            type:Number,
            required:true,
        },
        description:{
            type:String
        }
    },
    {
        timestamps:true
    }
)

const Charity = mongoose.model('charity',charitySchema)

module.exports = Charity