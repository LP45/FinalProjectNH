
const express = require('express');
const mongodb = require('mongodb');
const bodyparser = require('body-parser');
const PORT = 8080;

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

let db_handler;
const DB_URL = 'mongodb://localhost:27017';
const DB_NAME = "myths";
const facts_collections = "facts";
const users_collections = "users";
const admin_collections ="admin"


app.listen(PORT, () => {
    console.log("server is started");

    let mongo_client = mongodb.MongoClient;
    mongo_client.connect(DB_URL,{ useNewUrlParser: true, useUnifiedTopology: true },

        (err, db_client) => {
        if (err) {
            console.log("Error: " + err);
        }
        else {
            console.log("Database Connected");
            db_handler = db_client.db(DB_NAME);
        }
    });
});

app.get('/',function(req,res){
    res.render('home',{

    });
})

app.get("/profile/:username",(req,res)=>{
    const parameters = req.params;
    const username = parameters.username
    console.log(parameters)
    res.render("profile",{
        name:username,
        
    });
    


    
});

app.get('/view_category',function(req,res){
   let quote  = "Here are all the videos!"

    let videos
    

    res.render('content',{
        quote:quote,
        politics:subjects['politics'],
        economics:subjects['economics'],
        health:subjects['health'],
        music:subjects['music'],
        history:subjects['history']
    });
})

app.get('/add_myth',function(req,res){
    res.render('add_myth',{

    });
})


app.post("/addNewMyth",function(req,res){
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

   
    
})

app.get()

