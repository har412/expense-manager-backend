const mongoose = require('mongoose')

const expenseCategorySchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true

        },
        description:{
            type:String
        },
        default:{
          type:Boolean,
          default:false  
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

const ExpenseCategory = mongoose.model('expenseCategory',expenseCategorySchema)

module.exports = ExpenseCategory