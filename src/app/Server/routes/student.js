const express = require('express');
router = express.Router();
conn = require('../conn/conn')

router.post('/addstudent',(req,res)=>{
    let studentData = {
    
        ID:req.body.ID,
        fName:req.body.fName,
        sName:req.body.sName,
        surname:req.body.surname,
        email:req.body.email,
        Gender:req.body.gender
        
       }; 
 
    var sql = "INSERT INTO students set ?";
    conn.query(sql,[studentData],function(err){

        if(err)throw err;
        
        else
        { 
        con.query('select * from students',function(err,result){
            if (err) throw err;
            else{
               
                return res.send({result})
            }

        })
    }
})

})

module.exports = router;