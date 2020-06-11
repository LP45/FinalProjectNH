let db_handler;
const DB_URL = 'mongodb://localhost:27017';
const DB_NAME = "myths";
const facts_collections = "facts";
const users_collections = "users";
const admin_collections ="admin";
module.exports = {
    db_handler,
    DB_URL,
    DB_NAME,
    facts_collections,
    users_collections,
    admin_collections
}