const httpServer = require('http-status')
const { createUser, loginWithEmailAndPassword } = require('../services/auth.service')
const { handleResponse } = require('../utils/responseHandler')
const httpStatus = require('http-status')


const register = async (req, res,) => {

    try {
         await createUser(req.body, res)
        
    } catch (error) {
        handleResponse(
            res,
            httpStatus.INTERNAL_SERVER_ERROR,
            error.message,
            "Error in user registration"
        )
    }


}

const login = async (req,res) =>{
    try {
        const {email,password} = req.body
        const data = await loginWithEmailAndPassword(email,password ,res)
        if(data){
            await handleResponse(
                res,
                httpStatus.OK,
                data,
                "Login Sucess"
            )
        }
       
    } catch (error) {
       await handleResponse(
            res,
            httpStatus.INTERNAL_SERVER_ERROR,
            error.message,
            "Error in user Login"
        )
    }
}




module.exports = {
    register,
    login
}