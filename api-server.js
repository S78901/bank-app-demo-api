const express = require('express');
const cors = require('cors');
const app = express();

// Allow use of an .env file in the project
require('dotenv').config();

// Allow CORS requests locally in-browser for your test application / server duo
app.use(cors());

// Utilize express.json for your Express app
app.use(express.json());

// This is a standard API test. Allow access to '/' and respond with 'Hellow World".
app.get('/', function (req, res) {
   res.send('Hello World');
})

// Initialize the MongoDB Client
const { MongoClient } = require('mongodb');
// Store your sensitive info in .env files which you can grant server-only read access to. Since this is a 
// test app, the .env file is included for reference to allow an instant connection when you initialize the 
// project on your local machine. If you re-use the code as a template, please use your own database variables.
const username = process.env.EXPRESS_APP_MONGO_DB_USR;
const password = process.env.EXPRESS_APP_MONGO_DB_PW;
const dbCluster = process.env.EXPRESS_APP_MONGO_DB_CLUSTER_URI;

// Re-create the mongodb standard URI using the .env variables to protect your information.
const uri = `mongodb+srv://${username}:${password}@${dbCluster}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Provide basic routing to fetch the accounts from the MongoDB Database & send to the requestor
app.get('/accounts/read', function (req, res) {
    client.connect(err => {
        client.db("bank").collection("accounts").find({}).toArray(function(err, result) {
            if (err) {throw err;
            } else {
                res.send(JSON.stringify(result));
            }
            client.close();
        });
    });
});

// Initialize the server, listening on port 8081 of your localhost
const server = app.listen(8081, function () {
    let host = "localhost";
    let port = server.address().port
   
   console.log("API Express app listening at http://" + host + ":" + port)
});