const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({

    amount: {
        type: Number,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
},
    {
        timestamps: true
    }

)

const Expense = mongoose.model('expense',expenseSchema)

module.exports = Expense
