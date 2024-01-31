const mongoose = require('mongoose')

const charitySchema = new mongoose.Schema(
    {
        amount:{
            type:Number,
            required:true,
        },
        description:{
            type:String
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        }
    },
    {
        timestamps:true
    }
)

const Charity = mongoose.model('charity',charitySchema)

module.exports = Charity