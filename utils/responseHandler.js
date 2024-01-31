

const handleResponse = (res,status,data,message)=>{

    res.status(status).json({
        data:data,
        detail:message
    })

}

module.exports={handleResponse}
