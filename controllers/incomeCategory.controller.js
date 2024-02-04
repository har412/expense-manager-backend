const httpStatus = require("http-status")
const { handleResponse } = require("../utils/responseHandler")
const { insertIncomeCategory , updateIncomeCategory, deleteIncomeCategory, getIncomeCategorys, getIncomeCategoryById } = require("../services/incomeCatergory.service")


const addIncomeCategory = async(req,res) =>{

    try {
        const incomeCategory = await insertIncomeCategory(req,res)
        handleResponse(
            res,
            httpStatus.OK,
            incomeCategory,
            "IncomeCategory Added Success"
        )
    } catch (error) {
        handleResponse(
            res,
            httpStatus.INTERNAL_SERVER_ERROR,
            error.message,
            "Error in Add incomeCategory"
        )
    }

}

const editIncomeCategory = async(req,res) =>{

    try {
        const incomeCategory = await updateIncomeCategory(req,res)
        handleResponse(
            res,
            httpStatus.OK,
            incomeCategory,
            "Updated Sucessfully"
        )
    } catch (error) {
        handleResponse(
            res,
            httpStatus.INTERNAL_SERVER_ERROR,
            error.message,
            "Error in Edit IncomeCategory"
        )
    }

}

const removeIncomeCategory = async(req,res) =>{

    try {
        const response = await deleteIncomeCategory(req,res)
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
          'Error in deleting IncomeCategory'
      )
    }

}


const getAllIncomeCategorys = async(req,res)=>{

    try {
        const incomeCategory = await getIncomeCategorys(req,res)
                handleResponse(
            res,
            httpStatus.OK,
            incomeCategory,
            'Retrieved'
        )
    } catch (error) {
        handleResponse(
            res,
            httpStatus.INTERNAL_SERVER_ERROR,
            error.message,
            'Error in Getting IncomeCategory'
        )
    }

}

const incomeCategoryById = async(req,res)=>{

    try {
        const incomeCategory = await getIncomeCategoryById(req,res)
                handleResponse(
            res,
            httpStatus.OK,
            incomeCategory,
            'Retrieved'
        )
    } catch (error) {
        handleResponse(
            res,
            httpStatus.INTERNAL_SERVER_ERROR,
            error.message,
            'Error in Getting IncomeCategory'
        )
    }

}


module.exports = {
    addIncomeCategory,
    removeIncomeCategory,
    editIncomeCategory,
    getAllIncomeCategorys,
    incomeCategoryById
}