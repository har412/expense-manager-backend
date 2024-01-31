const mongoose = require('mongoose')

const expenseCategorySchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true,
            validate:{
                validator:
                    async function(value){
                        const existingCategory = await ExpenseCategory.findOne({name:value.trim()})
                        return !existingCategory
                    },
                message: 'Category name must be unique'
            }

        },
        description:{
            type:String,
            required:true
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