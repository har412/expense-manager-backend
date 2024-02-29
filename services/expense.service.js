const Expense = require('../models/expense.model')

const ExcelJS = require('exceljs');


const insertExpense = async (req,res) =>{
    const newExpense = {
        ...req.body,
        user:res.locals.user.checkUser._id
    }
    const expense = await Expense.create(newExpense)

    return expense
}

const updateExpense = async (req) =>{
    const updatedExpense = req.body
    const expense = await Expense.findOneAndUpdate(
        {_id:req.params.id},
        updatedExpense,
        {new:true}
    )
    return expense
    
}

const deleteExpense = async (req) =>{
    const expense = await Expense.findOneAndDelete(
        {_id:req.params.id},
        {new:true}
    )
    return expense
    
}

const getExpenses = async(req,res) =>{
    const query = req.query
    query.user = res.locals.user.checkUser._id
    const expense = await Expense.find(
        query
    )
    return expense
}

const getExpenseById = async(req,res) =>{
    const query = {
        _id : req.params.id
    }
    const expense = await Expense.find(
        query
    )
    return expense
}

const exportToExcel = async(req,res)=>{

        const expenses = await Expense.find({ user: res.locals.user.checkUser._id });

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Expenses');

        worksheet.columns = [
            { header: 'Date', key: 'date', width: 15 },
            { header: 'Amount', key: 'amount', width: 15 },
            { header: 'Category', key: 'category', width: 15 },
            { header: 'Description', key: 'description', width: 30 }
        ];

        expenses.forEach(expense => {
            worksheet.addRow({
                date: expense.date,
                amount: expense.amount,
                category: expense.category,
                description: expense.description
            });
        });

        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename=expenses.xlsx');

        await workbook.xlsx.write(res);
        res.end();
}



module.exports = {
    insertExpense,
    updateExpense,
    exportToExcel,
    deleteExpense,
    getExpenseById,
    getExpenses
}