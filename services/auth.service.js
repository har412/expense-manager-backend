const httpStatus = require('http-status')
const User = require('../models/user.model')
const { handleResponse } = require('../utils/responseHandler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const createUser = async (body, res) => {

    const checkUser = await User.findOne({ email: body.email })
    if (checkUser) {
        handleResponse(res, httpStatus.BAD_REQUEST, [], 'user already present')
    }
    else {
        const hashedPassword = await bcrypt.hash(body.password, 10)
        body.password = hashedPassword
        const user = await User.create(body)
        return user
    }
}

const loginWithEmailAndPassword = async (email, password, res) => {
    const checkUser = await User.findOne({ email: email })
    if (checkUser) {
        const checkPassword = bcrypt.compare(password, checkUser.password)
        if (checkPassword) {
            console.log(checkUser)
            const acccess_token = await jwt.sign({checkUser}, process.env.SECRET, { expiresIn: '10h' })
            const refresh_token = await jwt.sign({checkUser}, process.env.SECRET, { expiresIn: '7d' })
            return {
                acccess_token: acccess_token,
                refresh_token: refresh_token
            }
        }
        else {
            handleResponse(
                res,
                httpStatus.UNAUTHORIZED,
                [],
                "Unauthorised Access"
            )
        }
    }
    else {
        handleResponse(
            res,
            httpStatus.BAD_REQUEST,
            [],
            "User Not present"
        )
    }

}


module.exports = {
    createUser,
    loginWithEmailAndPassword
}