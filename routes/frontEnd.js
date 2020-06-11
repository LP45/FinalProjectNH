const express = require('express')
const router = express.Router();

router.get('/',(req, res) => {
    res.render('indexfrontend')
});

router.get('/view_category', (req, res) => {
    let quote  = "Here are all the videos by category!";
    let subjects="";
    
     res.render('content', {
         quote:quote,
         politics:subjects['politics'],
         economics:subjects['economics'],
         health:subjects['health'],
         music:subjects['music'],
         history:subjects['history']
     });
 });

router.get('/team',(req, res) => {
    res.render('meet_the_team')
});

router.get('/signup',(req, res) => {
    res.render('signup')
});

router.get('/about', (req, res) => {
    res.render('about')
});

router.get('/login', (req, res) => {
    res.render('login')
});

router.get('/profile', (req, res) => {
    res.render('profile')
});


router.post('/verifylogin', (req, res) => {
    //get the username and password from the form. 
    //make sure the username and password match th database. USer has enetered the right info
    //if password and username(validation) is sucesssfull res.render
    //else the authication failed. You would like to show an error that it does not match.
    res.render('profile')
});












module.exports = router

