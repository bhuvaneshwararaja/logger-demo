const connection = require("../dbConnection/db")

module.exports.loggerFunc = function(logDetails){

    const {logId, ...logData} = logDetails

    const sqlQuery = 'INSERT INTO log(logId,logData) VALUES (?,?)'
    connection.query(sqlQuery,[logId,JSON.stringify(logData)],(err,result) => {
        if(!err){
            if(result){
                console.log("Made entry in logger table")
            }
        }
    })
}   