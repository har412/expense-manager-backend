const jwt = require('jsonwebtoken')
const { handleResponse } = require('../utils/responseHandler')
const httpStatus = require('http-status')


const verifyUser = async (req,res,next) =>{
    
    try {
        let token = req.header('Authorization');
        token = token.split(' ')[1];
        const user = await jwt.verify(token,process.env.SECRET)
        res.locals.user = user
        next()
    } catch (error) {
        handleResponse(
            res,
            httpStatus.UNAUTHORIZED,
            error.message,
            'UNAUTHORIZED'
        )
    }

}


module.exports = {verifyUser}