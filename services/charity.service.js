const Charity = require("../models/charity.model")




const insertCharity = async (req,res) =>{
    const newCharity = {
        ...req.body,
        user:res.locals.user.checkUser._id
    }
    const charity = await Charity.create(newCharity)
    return charity
}

const updateCharity = async (req) =>{
    const updatedCharity = req.body
    const charity = await Charity.findOneAndUpdate(
        {_id:req.params.id},
        updatedCharity,
        {new:true}
    )
    return charity
    
}

const deleteCharity = async (req) =>{
    const charity = await Charity.findOneAndDelete(
        {_id:req.params.id},
        {new:true}
    )
    return charity
    
}

const getCharitys = async(req) =>{
    const query = req.query
    const charity = await Charity.find(
        query
    )
    return charity
}




module.exports = {
    insertCharity,
    updateCharity,
    deleteCharity,
    getCharitys
}