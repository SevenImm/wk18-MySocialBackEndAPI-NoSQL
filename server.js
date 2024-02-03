const express = require('express');
// initialize MongoDBCLient class
const { MongoClient } = require('mongodb');

const app = express();
const port = 3001;

// Connection string to local instance of MongoDB
const connectionStringURI = `mongodb:localhost:27017`;

// Initialize a new instance of MongoClient;
const client = new MongoClient(connectionStringURI);

// Declare a variable to hold the connection
let myDB;

// Create variable to hold our database name
const dbName = 'mySocialAPI';

// Use Connect method to connect to the mongo server
client.connect()
.then(() => {
    console.log('Connected successfully to MongoDB');
    // Use client.db() constructor to add a new db instance
    db = client.db(dbName);

    // Start up express server
    app.listen(port, () => {
        console.log (`Example app listening at http://localhost:${port}`);
    });
})
.catch((err) => {
    console.error('Mongo connection error: ', err.message);
})