const express = require('express');
router = express.Router();
conn = require('../conn/conn')

router.post('/addstudent',(req,res)=>{
    let studentData = {
    
        idNumber:req.body.idNumber,
        fName:req.body.fName,
        sName:req.body.sName,
        stud_number:req.body.stud_number,
        cellNumber:req.body.cellNumber,
        surname:req.body.surname,
        email:req.body.email,
        Gender:req.body.Gender
    
       }; 
 
    var sql = "INSERT INTO students set ?";
    conn.query(sql,[studentData],function(err){

        if(err){
            
            console.log("There was a problem with your registration")
            throw err;
        }        
        else
        { 
        conn.query('select * from students',function(err,result){
            if (err) throw err;
            else{
                console.log("Succesfully registered")
               
                return res.send({result})
            }
        })
    }
})
})

router.get("/getstud/:idNumber",(req,res)=>{

    let stud = req.params.idNumber;
    let query = "SELECT * FROM students WHERE idNumber = ?";
    
      conn.query(query,[stud], function(err,results){
        if(err)
          console.log(err);
        else
          res.send(results);
      })
    });


    
router.get("/getstud/:idNumber",(req,res)=>{

    let stud = req.params.idNumber;
    let query = "SELECT * FROM students WHERE idNumber = ?";
    
      conn.query(query,[stud], function(err,results){
        if(err)
          console.log(err);
        else
          res.send(results);
      })
    });

    //Get a student by ID number
router.get("/getstud/:idNumber",(req,res)=>{

    let stud = req.params.idNumber;
    let query = "SELECT * FROM students WHERE idNumber = ?";
    
      conn.query(query,[stud], function(err,results){
        if(err)
          console.log(err);
        else
          res.send(results);
      })
    });

        //Get a student by student number
router.get("/getstudent/:stud_number",(req,res)=>{

    let stud = req.params.stud_number;
    let query = "SELECT * FROM students WHERE stud_number = ?";
    
      conn.query(query,[stud], function(err,results){
        if(err)
          console.log(err);
        else
          res.send(results);
      })
    });


           //Delete a student via student number
router.delete("/deletestudent/:stud_number",(req,res)=>{

    let stud = req.params.stud_number;
    let query = "DELETE FROM students WHERE stud_number = ?";
    
      conn.query(query,[stud], function(err,results){
        if(err)
          console.log(err);
        else
            console.log("Student deleted")
          res.send(results);
      })
    });

              //Delete a student via ID number
router.delete("/deleteId/:idNumber",(req,res)=>{

    let stud = req.params.idNumber;
    let query = "DELETE FROM students WHERE idNumber = ?";
    
      conn.query(query,[stud], function(err,results){
        if(err)
          console.log(err);
        else
            console.log("Student deleted")
          res.send(results);
      })
    });
module.exports = router;