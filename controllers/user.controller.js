const httpStatus = require("http-status")
const { handleResponse } = require("../utils/responseHandler")
const { getUsers } = require("../services/user.service")


const editUser = async(req,res) =>{

    try {
        const user = await updateUser(req,res)
        handleResponse(
            res,
            httpStatus.OK,
            user,
            "Updated Sucessfully"
        )
    } catch (error) {
        handleResponse(
            res,
            httpStatus.INTERNAL_SERVER_ERROR,
            error.message,
            "Error in Edit User"
        )
    }

}



const getUserById = async(req,res)=>{

    try {
        const user = await getUsers(req,res)
        handleResponse(
            res,
            httpStatus.OK,
            user,
            'Retrieved'
        )
    } catch (error) {
        handleResponse(
            res,
            httpStatus.INTERNAL_SERVER_ERROR,
            error.message,
            'Error in Getting User'
        )
    }

}


module.exports = {
    editUser,
    getUserById
}