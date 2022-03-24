const express = require('express');
router = express.Router();
conn = require('../conn/conn')

router.post('/addstudent',(req,res)=>{
    let studentData = {
    
        idNumber:req.body.idNumber,
        fName:req.body.fName,
        sName:req.body.sName,
        cellNumber:req.body.cellNumber,
        surname:req.body.surname,
        email:req.body.email,
        Gender:req.body.Gender
        
       }; 
 
    var sql = "INSERT INTO students set ?";
    conn.query(sql,[studentData],function(err){

        if(err)throw err;
        
        else
        { 
        conn.query('select * from students',function(err,result){
            if (err) throw err;
            else{
               
                return res.send({result})
            }
        })
    }
})
})

module.exports = router;