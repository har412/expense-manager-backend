const Expense = require('../models/expense.model')



const insertExpense = async (req) =>{
    const expense = await Expense.create(req.body)
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

const getExpenses = async(req) =>{
    const query = req.query
    const expense = await Expense.find(
        query
    )
    return expense
}

const findExpenseById = async(id) =>{
    const expense = await Expense.find({_id:id})
    return expense
}




module.exports = {
    insertExpense,
    updateExpense,
    deleteExpense,
    getExpenses
}