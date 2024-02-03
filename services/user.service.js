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


const getUsers = async(req,res) =>{

    const user = await User.find(
       {_id:res.locals.user.checkUser._id}
    )
    return user
}



module.exports = {
    updateUser,
    getUsers
}