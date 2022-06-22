const express=require('express');
const connection = require('../db/db');
const router=express.Router()

router.post('/addrequestid',(req,res)=>{
    const {reqID}=req.body;
    const sqlquery='insert into logtabel (reqID,timestamp,response) values (?,?,?)';
    connection.query(sqlquery,[reqID,Date.now(),null],(err,result)=>{  // {} is not being considered as object
        if(!err) {
            console.log("Request ID added "+reqID);
            res.send({reqID:reqID})
        }
        else console.log(err);
    })
});


router.post('/updateresponse',(req,res)=>{
    console.log(req.body + "from logger update")
    const {reqID,...responsedata}=req.body;
    const sqlquery='select * from logtabel where reqID=?';
    connection.query(sqlquery,[reqID],(err,result)=>{
        if(!err)
        {
            if(result.length!=0){
                console.log(responsedata)
                const updatequery='update logtabel set response=? where reqID=?';
                connection.query(updatequery,[JSON.stringify(responsedata),reqID],(err,result)=>{
                    if(!err){ res.send({
                        reqID:reqID,
                        message:"updated respose to specific reqID"
                    })
                }
                })
            }
        }
    })
})

module.exports=router;