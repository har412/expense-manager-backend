const ExpenseCategory = require("../models/expenseCategory.model")




const insertExpenseCategory = async (req) =>{
    const expenseCategory = await ExpenseCategory.create(req.body)
    return expenseCategory
}

const updateExpenseCategory = async (req) =>{
    const updatedExpenseCategory = req.body
    const expenseCategory = await ExpenseCategory.findOneAndUpdate(
        {_id:req.params.id},
        updatedExpenseCategory,
        {new:true}
    )
    return expenseCategory
    
}

const deleteExpenseCategory = async (req) =>{
    const expenseCategory = await ExpenseCategory.findOneAndDelete(
        {_id:req.params.id},
        {new:true}
    )
    return expenseCategory
    
}

const getExpenseCategorys = async(req) =>{
    const query = req.query
    const expenseCategory = await ExpenseCategory.find(
        query
    )
    return expenseCategory
}




module.exports = {
    insertExpenseCategory,
    updateExpenseCategory,
    deleteExpenseCategory,
    getExpenseCategorys
}