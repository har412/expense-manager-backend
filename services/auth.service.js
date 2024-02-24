const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const httpStatus = require('http-status')

const User = require('../models/user.model')
const expense_categories = require('../config/expense_categories.json')
const income_categories = require('../config/income_categories.json')
const { handleResponse } = require('../utils/responseHandler')
const { bulkCreateExpenseCategory } = require('./expenseCatergory.service')
const { bulkCreateIncomeCategory } = require('./incomeCatergory.service')


const createUser = async (body, res) => {

    const checkUser = await User.findOne({ email: body.email })
    if (checkUser) {
        handleResponse(res, httpStatus.BAD_REQUEST, [], 'user already present')
    }
    else {
        const hashedPassword = await bcrypt.hash(body.password, 10)
        body.password = hashedPassword
        const user = await User.create(body)
        // console.log(user)
        if (user){
            try {
                const data = expense_categories.map((item)=>{
                    return{
                        name:item.name,
                        description:item.description,
                        user:user._id
                    }
                })
                await bulkCreateExpenseCategory(data)
            } catch (error) {
               return    handleResponse(
                res,
                httpStatus.BAD_REQUEST,
                error.message,
                "Error in adding default expense categories"
            )
            }
        }

        if (user){
            const data = income_categories.map((item)=>{
                return{
                    name:item.name,
                    description:item.description,
                    user:user._id
                }
            })
            try {
                await bulkCreateIncomeCategory(data)
            } catch (error) {
               return   handleResponse(
                res,
                httpStatus.BAD_REQUEST,
                error.message,
                "Error in adding default income categories"
            )
            }
        }

        handleResponse(
            res,
            httpStatus.CREATED,
            user,
            "User Created Success"
        )
        
    }
}

const loginWithEmailAndPassword = async (email, password, res) => {
    const checkUser = await User.findOne({ email: email })
    if (checkUser) {
        const checkPassword = await bcrypt.compare(password, checkUser.password)
        if (checkPassword) {
            // console.log(checkUser)
            const acccess_token = await jwt.sign({checkUser}, process.env.SECRET)
            const refresh_token = await jwt.sign({checkUser}, process.env.SECRET, { expiresIn: '7d' })
            return {
                access_token: acccess_token,
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
            return null
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