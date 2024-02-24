const mongoose = require('mongoose')

const incomeCategorySchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true
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

const IncomeCategory = mongoose.model('incomeCategory',incomeCategorySchema)

module.exports = IncomeCategory