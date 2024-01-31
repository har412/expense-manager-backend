const mongoose = require('mongoose')

const budgetSchema = new mongoose.Schema(
    {
        amount:{
            type:Number,
            required:true,
        },
        description:{
            type:String
        },
        start_date:{
            type:Date,
            required:true
        },
        end_date:{
            type:Date,
            required:true
        }
    },
    {
        timestamps:true
    }
)

const Budget = mongoose.model('budget',budgetSchema)

module.exports = Budget