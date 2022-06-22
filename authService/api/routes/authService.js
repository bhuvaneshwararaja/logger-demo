const express = require('express')
const connection = require('../dbConnection/db')
const router = express.Router()
const {loggerFunc} = require("../logger/logger")

  

router.post("/login",(req,res) => {
    const loginDetails  = {
        username:req.body.username,
        password:req.body.password,
        timeStamp:Date.now(),
        logId:req.query.logId
    }
    
    console.log(req.body)
    const sqlQuery = 'SELECT * FROM User where username = ? AND pwd = ?'
    connection.query(sqlQuery,[loginDetails.username,loginDetails.password], (err,result) => {
        if(!err) {
            if(result.length === 0){
                loggerFunc(loginDetails)
                console.log(loginDetails)
                res.send({
                    reqID:loginDetails.logId,
                    Message:"unAutherized"
                })
            }
            else{
                loggerFunc(loginDetails)
                console.log(loginDetails)

                res.send({
                    reqID:loginDetails.logId,
                    Message:"username and password are correct",
                    user:result[0].username
                })
            }
        }
        else{
            console.log(err)
        }
    })

})


module.exports = router