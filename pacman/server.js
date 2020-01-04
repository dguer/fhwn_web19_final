const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/dist/pacman'));

app.listen(3000, function () {
    console.log('App listening on port 3000!');
  });