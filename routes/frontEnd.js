const express = require('express')
const router = express.Router();

router.get('/view_category',function(req,res){
    let quote  = "Here are all the videos by category!"
 
     
 
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

router.get('/profile', function(req,res){
    res.render('authentication')
});













module.exports = router

