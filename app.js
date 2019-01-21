var port = process.env.PORT || 3000,
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.use(bodyParser.json());

/** setting Access-Control-Allow-Origin to resolve CORS issue in a browser, please refer to: https://developer.mozilla.org/ru/docs/Web/HTTP/CORS **/
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// TODO: Enable DataBase
/** (We do not use DataBase for now) **/
/** Postgress connection and Table creation:

const { Client } = require('pg');

const client = new Client({
    host     : "webcodesio-instance.clnak35nnwli.us-east-1.rds.amazonaws.com",
    user     : "administrator",
    database : "webcodes",
    password : "Webcodes!1",
    port     : 5432
});

client.connect(err => {
    if(err) console.log(err);
    else console.log('connected');
});
 **/

/** create 'users' Table if doesn't exist **/
/**
 client.query('CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, userName VARCHAR(40) NOT NULL,\n' +
    'password VARCHAR(40) NOT NULL)', (error, response) => {
    console.log(error, response);
});
**/

/** Create server connection **/
var server = app.listen(port, function () {
    console.log('Server running at http://127.0.0.1:' + port + '/');
});


/** Routes **/
// Default route
app.get('/', function(req, res) {
    res.send('please login <a href="/login">Login</a>');
});

app.get('/login', function(req, res) {
    res.send({
        message: 'test'
    });
});

// LOGIN API
app.post('/login', function(req, res) {
    if(req && req.body && req.body.username && req.body.password) {

        console.log(req.body.username, req.body.password);
        console.log(req.body);

        if(req.body.username ==='test' && req.body.password=='123456') {
            res.status(200);
            res.send({
                message: 'test'
            });
        } else {
            res.status(401);
            res.send('Could not find records for the username and password');
        }
        // TODO: Enable DataBase
        /** (We do not use DataBase for now) **/
        /**
        client.query("SELECT username FROM users WHERE username='" + req.body.username + "' and password='" + req.body.password + "';", (error, response) => {
            if(error) {
                res.status(404);
                res.send('Error while accessing records : ' + req.body.username);
            } else {
                if(response.rowCount > 0) {
                    res.status(200);
                    res.send(`Welcome ${req.body.username}`);
                } else {
                    res.status(401);
                    res.send('Could not find records for the username and password');
                }
            }
        });
        **/
    } else {
        res.status(401);
        res.send('Please specify username and password')
    }
});

// CREATE USER API
app.post('/create-user', function(req, res) {
    if(req && req.body && req.body.username && req.body.password) {
        // TODO: Enable DataBase
        /** (We do not use DataBase for now) **/
        /**
        client.query("INSERT INTO users(username, password) VALUES ( '" + req.body.username + "', '" + req.body.password + "')", (error, response) => {
            if(error) {
                res.status(400);
                res.send('Error while recording to DB: ' + error);
            } else {
                console.log(response);
                res.status(200);
                res.send(`Created record ${req.body.username}`);
            }
        });
         **/

    } else {
        res.status(400);
        res.send('Please specify username and password')
    }
});
// DELETE USER API
app.delete('/delete-user', function(req, res) {
    if(req && req.body && req.body.username && req.body.password) {
        // TODO: Enable DataBase
        /** (We do not use DataBase for now) **/
        /**
        client.query("DELETE FROM users * WHERE username='" + req.body.username + "' and password='" + req.body.password + "';", (error, response) => {
            if(error) {
                res.status(400);
                res.send('Error while recording to DB: ' + error);
            } else {
                console.log(response);
                res.status(200);
                res.send(`Deleted record ${req.body.username}`);
            }
        });
         **/

    } else {
        res.status(400);
        res.send('Please specify username and password')
    }
});