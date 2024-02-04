const httpStatus = require("http-status")
const { handleResponse } = require("../utils/responseHandler")
const { insertExpenseCategory, updateExpenseCategory, deleteExpenseCategory, getExpenseCategorys, getExpenseCategoryById } = require("../services/expenseCategory.service")


const addExpenseCategory = async(req,res) =>{

    try {
        const expenseCategory = await insertExpenseCategory(req,res)
        handleResponse(
            res,
            httpStatus.OK,
            expenseCategory,
            "ExpenseCategory Added Success"
        )
    } catch (error) {
        handleResponse(
            res,
            httpStatus.INTERNAL_SERVER_ERROR,
            error.message,
            "Error in Add expenseCategory"
        )
    }

}

const editExpenseCategory = async(req,res) =>{

    try {
        const expenseCategory = await updateExpenseCategory(req,res)
        handleResponse(
            res,
            httpStatus.OK,
            expenseCategory,
            "Updated Sucessfully"
        )
    } catch (error) {
        handleResponse(
            res,
            httpStatus.INTERNAL_SERVER_ERROR,
            error.message,
            "Error in Edit ExpenseCategory"
        )
    }

}

const removeExpenseCategory = async(req,res) =>{

    try {
        const response = await deleteExpenseCategory(req,res)
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
          'Error in deleting ExpenseCategory'
      )
    }

}


const getAllExpenseCategorys = async(req,res)=>{

    try {
        const expenseCategory = await getExpenseCategorys(req,res)
                handleResponse(
            res,
            httpStatus.OK,
            expenseCategory,
            'Retrieved'
        )
    } catch (error) {
        handleResponse(
            res,
            httpStatus.INTERNAL_SERVER_ERROR,
            error.message,
            'Error in Getting ExpenseCategory'
        )
    }

}

const expenseCategoryById = async(req,res)=>{

    try {
        const expenseCategory = await getExpenseCategoryById(req,res)
                handleResponse(
            res,
            httpStatus.OK,
            expenseCategory,
            'Retrieved'
        )
    } catch (error) {
        handleResponse(
            res,
            httpStatus.INTERNAL_SERVER_ERROR,
            error.message,
            'Error in Getting ExpenseCategory'
        )
    }

}


module.exports = {
    addExpenseCategory,
    removeExpenseCategory,
    editExpenseCategory,
    getAllExpenseCategorys,
    expenseCategoryById
}