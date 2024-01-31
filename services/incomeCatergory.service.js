const IncomeCategory = require("../models/incomeCategory.model")




const insertIncomeCategory = async (req,res) =>{
    const newIncomeCategory = {
        ...req.body,
        user:res.locals.user.checkUser._id
    }
    const incomeCategory = await IncomeCategory.create(newIncomeCategory)
    return incomeCategory
}

const updateIncomeCategory = async (req) =>{
    const updatedIncomeCategory = req.body
    const incomeCategory = await IncomeCategory.findOneAndUpdate(
        {_id:req.params.id},
        updatedIncomeCategory,
        {new:true}
    )
    return incomeCategory
    
}

const deleteIncomeCategory = async (req) =>{
    const incomeCategory = await IncomeCategory.findOneAndDelete(
        {_id:req.params.id},
        {new:true}
    )
    return incomeCategory
    
}

const getIncomeCategorys = async(req) =>{
    const query = req.query
    const incomeCategory = await IncomeCategory.find(
        query
    )
    return incomeCategory
}




module.exports = {
    insertIncomeCategory,
    updateIncomeCategory,
    deleteIncomeCategory,
    getIncomeCategorys
}