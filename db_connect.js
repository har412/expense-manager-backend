const mongoose = require('mongoose')

const connect = () =>{
    mongoose.connect('mongodb+srv://harkirat:12345678aA@cluster0.wxyr5kj.mongodb.net/Clustor0?retryWrites=true&w=majority')
    .then(data=>{
        console.log("Db Connected Sucessfully")
    })
    .catch(err=>{
        console.log("Error in connecting to db" , err.message)
    })
}

module.exports = {connect}