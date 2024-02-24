const IncomeCategory = require('../models/incomeCategory.model')



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

const getIncomeCategorys = async(req,res) =>{
    const query = req.query
    query.user = res.locals.user.checkUser._id
    const incomeCategory = await IncomeCategory.find(
        query
    )
    return incomeCategory
}

const getIncomeCategoryById = async(req,res) =>{
    const query = {
        _id : req.params.id
    }
    const incomeCategory = await IncomeCategory.find(
        query
    )
    return incomeCategory
}

const bulkCreateIncomeCategory = async(data)=>{
    return await IncomeCategory.insertMany(data)
}


module.exports = {
    insertIncomeCategory,
    updateIncomeCategory,
    deleteIncomeCategory,
    getIncomeCategoryById,
    getIncomeCategorys,
    bulkCreateIncomeCategory
}