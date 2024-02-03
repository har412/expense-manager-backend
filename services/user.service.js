const User = require("../models/user.model")

const updateUser = async (req) =>{
    const updatedUser = req.body
    const user = await User.findOneAndUpdate(
        {_id:req.params.id},
        updatedUser,
        {new:true}
    )
    return user
    
}


const getUsers = async(req) =>{
    const user = await User.find(
       {_id:req.params.id}
    )
    return user
}




module.exports = {
    updateUser,
    getUsers
}