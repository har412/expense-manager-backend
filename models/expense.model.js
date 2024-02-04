const mongoose = require('mongoose')
const User = require('./user.model')
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
        type: String
    },
    time:{
        type:String
    },
    date:{
        type:String,
        required:true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    }
},
    {
        timestamps: true
    }

)

const Expense = mongoose.model('expense', expenseSchema)

module.exports = Expense
