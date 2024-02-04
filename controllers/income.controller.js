const httpStatus = require("http-status")
const { handleResponse } = require("../utils/responseHandler")
const { insertIncome, updateIncome, deleteIncome, getIncomes, getIncomeById } = require("../services/income.service")


const addIncome = async(req,res) =>{

    try {
        const income = await insertIncome(req,res)
        handleResponse(
            res,
            httpStatus.OK,
            income,
            "Income Added Success"
        )
    } catch (error) {
        handleResponse(
            res,
            httpStatus.INTERNAL_SERVER_ERROR,
            error.message,
            "Error in Add income"
        )
    }

}

const editIncome = async(req,res) =>{

    try {
        const income = await updateIncome(req,res)
        handleResponse(
            res,
            httpStatus.OK,
            income,
            "Updated Sucessfully"
        )
    } catch (error) {
        handleResponse(
            res,
            httpStatus.INTERNAL_SERVER_ERROR,
            error.message,
            "Error in Edit Income"
        )
    }

}

const removeIncome = async(req,res) =>{

    try {
        const response = await deleteIncome(req,res)
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
          'Error in deleting Income'
      )
    }

}


const getAllIncomes = async(req,res)=>{

    try {
        const income = await getIncomes(req,res)
                handleResponse(
            res,
            httpStatus.OK,
            income,
            'Retrieved'
        )
    } catch (error) {
        handleResponse(
            res,
            httpStatus.INTERNAL_SERVER_ERROR,
            error.message,
            'Error in Getting Income'
        )
    }

}

const incomeById = async(req,res)=>{

    try {
        const income = await getIncomeById(req,res)
                handleResponse(
            res,
            httpStatus.OK,
            income,
            'Retrieved'
        )
    } catch (error) {
        handleResponse(
            res,
            httpStatus.INTERNAL_SERVER_ERROR,
            error.message,
            'Error in Getting Income'
        )
    }

}


module.exports = {
    addIncome,
    removeIncome,
    editIncome,
    getAllIncomes,
    incomeById
}