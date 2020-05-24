
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
const COLLECTION = "fact_table";

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


app.get('/view_all',function(req,res){
    res.render('content',{

    });
})

app.get('/add_myth',function(req,res){
    res.render('add_myth',{

    });
})


app.post("/addNewMyth",function(req,res){
    console.log(req.body)
    res.redirect("/")
})



