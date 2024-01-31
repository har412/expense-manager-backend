const Budget = require("../models/budget.model")




const insertBudget = async (req) =>{
    const budget = await Budget.create(req.body)
    return budget
}

const updateBudget = async (req) =>{
    const updatedBudget = req.body
    const budget = await Budget.findOneAndUpdate(
        {_id:req.params.id},
        updatedBudget,
        {new:true}
    )
    return budget
    
}

const deleteBudget = async (req) =>{
    const budget = await Budget.findOneAndDelete(
        {_id:req.params.id},
        {new:true}
    )
    return budget
    
}

const getBudgets = async(req) =>{
    const query = req.query
    const budget = await Budget.find(
        query
    )
    return budget
}




module.exports = {
    insertBudget,
    updateBudget,
    deleteBudget,
    getBudgets
}