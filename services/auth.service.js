const httpStatus = require('http-status')
const User = require('../models/user.model')
const { handleResponse } = require('../utils/responseHandler')


const createUser = async(body , res) =>{

    const checkUser = await User.findOne({email:body.email})
    if(checkUser){
        handleResponse(res,httpStatus.BAD_REQUEST,[],'user already present')
    }
    else{
        const user = await User.create(body)
        return user
    }
    

}

module.exports ={createUser}