 const express=require('express');
 const router=express.Router(); // Required for error handling and validation
 const axios=require('axios');
 const registry=require('./registry.json');
 const uuid=require('uuid');
 const fs=require('fs');

router.all('/:apiName/:path',(req,res)=>{


    if(registry['services'][req.params.apiName]){

        const id=uuid.v4();
    console.log(registry['services'][req.params.apiName].url+"/"+req.params.path+`?logId=${id}`)

        axios.post('http://localhost:3001/log/addrequestid',{reqID:id}).then((res)=>{
        })
        
        axios({
            method:req.method,
            url:registry['services'][req.params.apiName].url+"/"+req.params.path+`?logId=${id}`,
            body:req.body
        }).then((res)=>{     

            // axios.post('http://localhost:3001/log/updateresponse',response.data).then((res)=>{
            //     console.log(res.data)
            // })
            
            console.log(res);
            // res.send(response.data); // data contains what the fakeapi sends
        }).catch(()=>{res.send("No response")});
    }
    else{
        res.send("No such API");
    }
}); 



 module.exports=router;