
const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const bodyparser = require('body-parser');
const path = require('path')
const PORT = 8080;

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);
app.set('view engine', 'ejs');

let db_handler;
const DB_URL = 'mongodb://localhost:27017';
const DB_NAME = "myths";
const facts_collections = "facts";
const users_collections = "users";
const admin_collections ="admin"

const frontEnd = require('./routes/frontEnd')
const backEnd = require('./routes/backEnd')
app.use('/',frontEnd)
app.use('/admin',backEnd)

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

