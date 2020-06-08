const express = require('express')
const router = express.Router();

router.get('/',function(req,res){

    res.render('indexfrontend')

});

router.get('/view_category',function(req,res){
    let quote  = "Here are all the videos by category!"
    let subjects=""
     
 
     res.render('content',{
         quote:quote,
         politics:subjects['politics'],
         economics:subjects['economics'],
         health:subjects['health'],
         music:subjects['music'],
         history:subjects['history']
     });
 });

router.get('/team',function(req,res){

    res.render('meet_the_team')
});

router.get('/signup',function(req,res){

    res.render('signup')
});

router.get('/about', function(req,res){
    res.render('about')
});

router.get('/login', function(req,res){
    res.render('login')
});

router.get('/profile', function(req,res){
    res.render('profile')
});


router.post('/verifylogin', function(req,res){
    //get the username and password from the form. 
    //make sure the username and password match th database. USer has enetered the right info
    //if password and username(validation) is sucesssfull res.render
    //else the authication failed. You would like to show an error that it does not match.
    res.render('profile')
});












module.exports = router

