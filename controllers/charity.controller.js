const httpStatus = require("http-status")
const { handleResponse } = require("../utils/responseHandler")
const { insertCharity, updateCharity, deleteCharity, getCharitys } = require("../services/charity.service")


const addCharity = async(req,res) =>{

    try {
        const charity = await insertCharity(req,res)
        handleResponse(
            res,
            httpStatus.OK,
            charity,
            "Charity Added Success"
        )
    } catch (error) {
        handleResponse(
            res,
            httpStatus.INTERNAL_SERVER_ERROR,
            error.message,
            "Error in Add charity"
        )
    }

}

const editCharity = async(req,res) =>{

    try {
        const charity = await updateCharity(req,res)
        handleResponse(
            res,
            httpStatus.OK,
            charity,
            "Updated Sucessfully"
        )
    } catch (error) {
        handleResponse(
            res,
            httpStatus.INTERNAL_SERVER_ERROR,
            error.message,
            "Error in Edit Charity"
        )
    }

}

const removeCharity = async(req,res) =>{

    try {
        const response = await deleteCharity(req,res)
        handleResponse(
            res,
            httpStatus.OK,
            response,
            'Deleted Sucess'
        )
    } catch (error) {
      handleResponse(
          res,
          httpStatus.INTERNAL_SERVER_ERROR,
          error.message,
          'Error in deleting Charity'
      )
    }

}


const getAllCharitys = async(req,res)=>{

    try {
        const charity = await getCharitys(req,res)
        handleResponse(
            res,
            httpStatus.OK,
            charity,
            'Retrieved'
        )
    } catch (error) {
        handleResponse(
            res,
            httpStatus.INTERNAL_SERVER_ERROR,
            error.message,
            'Error in Getting Charity'
        )
    }

}


module.exports = {
    addCharity,
    removeCharity,
    editCharity,
    getAllCharitys
}