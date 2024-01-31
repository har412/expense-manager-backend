const httpStatus = require("http-status")
const { handleResponse } = require("../utils/responseHandler")
const { insertBudget, updateBudget, deleteBudget, getBudgets } = require("../services/budget.service")
const catchAsync = require("../utils/catchAsync")


const addBudget =  catchAsync(async(req,res) =>{

    try {
        const budget = await insertBudget(req,res)
        handleResponse(
            res,
            httpStatus.OK,
            budget,
            "Budget Added Success"
        )
    } catch (error) {
        handleResponse(
            res,
            httpStatus.INTERNAL_SERVER_ERROR,
            error.message,
            "Error in Add budget"
        )
    }

})

const editBudget = async(req,res) =>{

    try {
        const budget = await updateBudget(req,res)
        handleResponse(
            res,
            httpStatus.OK,
            budget,
            "Updated Sucessfully"
        )
    } catch (error) {
        handleResponse(
            res,
            httpStatus.INTERNAL_SERVER_ERROR,
            error.message,
            "Error in Edit Budget"
        )
    }

}

const removeBudget = async(req,res) =>{

    try {
        const response = await deleteBudget(req,res)
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
          'Error in deleting Budget'
      )
    }

}


const getAllBudgets = async(req,res)=>{

    try {
        const budget = await getBudgets(req,res)
        handleResponse(
            res,
            httpStatus.OK,
            budget,
            'Retrieved'
        )
    } catch (error) {
        handleResponse(
            res,
            httpStatus.INTERNAL_SERVER_ERROR,
            error.message,
            'Error in Getting Budget'
        )
    }

}


module.exports = {
    addBudget,
    removeBudget,
    editBudget,
    getAllBudgets
}