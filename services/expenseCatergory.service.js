const ExpenseCategory = require('../models/expenseCategory.model')



const insertExpenseCategory = async (req,res) =>{
    const newExpenseCategory = {
        ...req.body,
        user:res.locals.user.checkUser._id
    }
    const expenseCategory = await ExpenseCategory.create(newExpenseCategory)

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

const getExpenseCategorys = async(req,res) =>{
    const query = req.query
    query.user = res.locals.user.checkUser._id
    const expenseCategory = await ExpenseCategory.find(
        query
    )
    return expenseCategory
}

const getExpenseCategoryById = async(req,res) =>{
    const query = {
        _id : req.params.id
    }
    const expenseCategory = await ExpenseCategory.find(
        query
    )
    return expenseCategory
}


const bulkCreateExpenseCategory = async(data)=>{
    return await ExpenseCategory.insertMany(data)
}


module.exports = {
    insertExpenseCategory,
    updateExpenseCategory,
    deleteExpenseCategory,
    getExpenseCategoryById,
    getExpenseCategorys,
    bulkCreateExpenseCategory
}