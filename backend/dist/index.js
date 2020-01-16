"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const uuid = require("uuid");
// https://medium.com/@Pierre_anthill/typescript-expressjs-api-with-webpack-4655126d884b 
class Server {
    constructor() {
        this.serverName = "webserver";
        this.tokens = [];
        // initialize the express js app
        this.app = express();
        // register central logging
        this.app.use(this.logMiddleware.bind(this));
        // add the processing of json payload
        this.app.use([bodyParser.json()]);
        // offer the angular page
        this.app.use(express.static(path.join(__dirname, "../pacman/dist/pacman"))); // http://expressjs.com/en/starter/static-files.html
        // make a signin endpoint with
        // - credential check
        // - logging // TODO: #GDPR :-)
        // - generate token
        // - store tokens (further improvement: expire-time)
        this.app.post('/signin', (req, res) => {
            if (req.body.username === "test" &&
                req.body.password === "test") {
                console.log('  auth: ' + req.header('Authorization'));
                let newToken = uuid();
                this.tokens.push(newToken);
                console.log('  token added to store: ' + newToken);
                res.status(200).json({ token: newToken });
            }
            else {
                res.status(403).json({ reason: 'wrong credentials' });
            }
        });
        // make a data endpoint with
        // - Auth check
        // - logging
        this.app.get('/home', (req, res) => {
            let curToken = req.header('Authorization');
            console.log('  auth: ' + curToken);
            if (this.tokens.indexOf(curToken) === -1) {
                // https://http.cat/401
                res.status(401).json({ reason: 'Need to Login!' });
                console.log('  not logged in');
            }
            else {
                res.status(200).json(['logged in']);
                console.log('  logged in');
            }
        });
        // start the server on port 3000
        this.app.listen(3000, () => console.log('started at http://localhost:3000/'));
    }
    logMiddleware(req, res, next) {
        console.log(this.serverName + ': ' + req.url);
        next();
    }
}
exports.Server = Server;
// create the server
new Server();
//# sourceMappingURL=index.js.map