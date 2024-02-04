const Income = require('../models/income.model')



const insertIncome = async (req,res) =>{
    const newIncome = {
        ...req.body,
        user:res.locals.user.checkUser._id
    }
    const income = await Income.create(newIncome)

    return income
}

const updateIncome = async (req) =>{
    const updatedIncome = req.body
    const income = await Income.findOneAndUpdate(
        {_id:req.params.id},
        updatedIncome,
        {new:true}
    )
    return income
    
}

const deleteIncome = async (req) =>{
    const income = await Income.findOneAndDelete(
        {_id:req.params.id},
        {new:true}
    )
    return income
    
}

const getIncomes = async(req,res) =>{
    const query = req.query
    query.user = res.locals.user.checkUser._id
    const income = await Income.find(
        query
    )
    return income
}

const getIncomeById = async(req,res) =>{
    const query = {
        _id : req.params.id
    }
    const income = await Income.find(
        query
    )
    return income
}




module.exports = {
    insertIncome,
    updateIncome,
    deleteIncome,
    getIncomeById,
    getIncomes
}