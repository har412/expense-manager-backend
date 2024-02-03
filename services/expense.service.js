const Expense = require('../models/expense.model')



const insertExpense = async (req,res) =>{
    const newExpense = {
        ...req.body,
        user:res.locals.user.checkUser._id
    }
    const expense = await Expense.create(newExpense)

    return expense
}

const updateExpense = async (req) =>{
    const updatedExpense = req.body
    const expense = await Expense.findOneAndUpdate(
        {_id:req.params.id},
        updatedExpense,
        {new:true}
    )
    return expense
    
}

const deleteExpense = async (req) =>{
    const expense = await Expense.findOneAndDelete(
        {_id:req.params.id},
        {new:true}
    )
    return expense
    
}

const getExpenses = async(req,res) =>{
    const query = req.query
    query.user = res.locals.user.checkUser._id
    const expense = await Expense.find(
        query
    )
    return expense
}




module.exports = {
    insertExpense,
    updateExpense,
    deleteExpense,
    getExpenses
}