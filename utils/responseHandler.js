

const handleResponse = async (res,status,data,message)=>{

    res.status(status).send({
        data:data,
        detail:message
    })

}

module.exports={handleResponse}
