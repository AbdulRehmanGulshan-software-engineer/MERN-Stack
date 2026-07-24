const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const url = process.env.MONGODB_URL;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect(url)
        .then((client) => {
            // console.log("Connected To MongoDB");
            callback();
            _db = client.db('airbnb');
        })
        .catch((err) => {
            console.log(err);
        });
};

const getDB = () => {
    if (!_db) {
        throw new Error('Mongo not connected');
    }
    return _db;

}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;