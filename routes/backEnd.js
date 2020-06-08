const express = require('express')
const router = express.Router();

router.get('/',function(req,res){
    res.render('adminHome')
});


router.get('/view_all',function(req,res){
    //retrieve all myths form database
    //you want to send the data(or result array) to the ejs page
    res.render('adminViewall')
});


router.get('/add_myth',function(req,res){
    res.render('adminAddmyth')
});


router.post("/addNewMyth",function(req,res){
    let information = req.body;
    let title = information.Myth_Title;
    let description = information.Myth_Description;
    let valid = information.validity;
    let sources = information.source;
 console.log(req.body) //when the user submits
    const newMyth = {
        title:title,
        description:description,
        valid:valid,
        sources:sources
    }


    db_handler.collection(facts_collections).insertOne(newMyth,(err)=>{
            if(!err){
                console.log("SuccessFullly added")
                res.redirect("/")
            }
            else{
                console.log("error"+err)
            }
           
        });
    
   
    
});

router.get('/',function(req,res){
    res.render('adminHome')
});


module.exports = router