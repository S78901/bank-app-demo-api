const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', function (req, res) {
   res.send('Hello World');
})

const server = app.listen(8081, function () {
//    var host = server.address().address
    let host = "localhost";
    let port = server.address().port
   
   console.log("API Express app listening at http://" + host + ":" + port)
});

const { MongoClient } = require('mongodb');
const username = process.env.EXPRESS_APP_MONGO_DB_PW;
const password = process.env.EXPRESS_APP_MONGO_DB_USR;
const dbCluster = process.env.EXPRESS_APP_MONGO_DB_CLUSTER_URI;
const uri = `mongodb+srv://${username}:${password}@${dbCluster}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
app.get('/accounts/read', function (req, res) {
    client.connect(err => {
        const collection = client.db("accounts").collection("devices");
        // perform actions on the collection object
        if (err) {
            throw err;
        } else {
            res.send(JSON.stringify(result));
        };
        client.close();
    });
});