const Income = require("../models/income.model")


const insertIncome = async (req) =>{
    const income = await Income.create(req.body)
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

const getIncomes = async(req) =>{
    const query = req.query
    const income = await Income.find(
        query
    )
    return income
}




module.exports = {
    insertIncome,
    updateIncome,
    deleteIncome,
    getIncomes
}