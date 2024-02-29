const httpStatus = require("http-status")
const { handleResponse } = require("../utils/responseHandler")
const { insertExpense, updateExpense, deleteExpense, getExpenses, getExpenseById, exportToExcel } = require("../services/expense.service")


const addExpense = async (req, res) => {

    try {
        const expense = await insertExpense(req, res)
        handleResponse(
            res,
            httpStatus.OK,
            expense,
            "Expense Added Success"
        )
    } catch (error) {
        handleResponse(
            res,
            httpStatus.INTERNAL_SERVER_ERROR,
            error.message,
            "Error in Add expense"
        )
    }

}

const editExpense = async (req, res) => {

    try {
        const expense = await updateExpense(req, res)
        handleResponse(
            res,
            httpStatus.OK,
            expense,
            "Updated Sucessfully"
        )
    } catch (error) {
        handleResponse(
            res,
            httpStatus.INTERNAL_SERVER_ERROR,
            error.message,
            "Error in Edit Expense"
        )
    }

}

const removeExpense = async (req, res) => {

    try {
        const response = await deleteExpense(req, res)
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
            'Error in deleting Expense'
        )
    }

}


const getAllExpenses = async (req, res) => {

    try {
        const expense = await getExpenses(req, res)
        handleResponse(
            res,
            httpStatus.OK,
            expense,
            'Retrieved'
        )
    } catch (error) {
        handleResponse(
            res,
            httpStatus.INTERNAL_SERVER_ERROR,
            error.message,
            'Error in Getting Expense'
        )
    }

}

const expenseById = async (req, res) => {

    try {
        const expense = await getExpenseById(req, res)
        handleResponse(
            res,
            httpStatus.OK,
            expense,
            'Retrieved'
        )
    } catch (error) {
        handleResponse(
            res,
            httpStatus.INTERNAL_SERVER_ERROR,
            error.message,
            'Error in Getting Expense'
        )
    }

}


const exportExpensesToExcel = async (req, res) => {
    try {
        const expense = await exportToExcel(req, res)
    } catch (error) {
        console.log(error)
       return handleResponse(
            res,
            httpStatus.INTERNAL_SERVER_ERROR,
            error.message,
            'Error in Exporting to Excel'
        )
    }
}


module.exports = {
    addExpense,
    exportExpensesToExcel,
    removeExpense,
    editExpense,
    getAllExpenses,
    expenseById
}