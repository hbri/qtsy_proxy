var path = require('path');
const express = require('express');
var bodyparser = require('body-parser');
var mongo = require('../database/index.js');
const app = express();

const port = 8080;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
});

app.get('/test', (req, res) => {
  res.send('GET Request received at /test')
  res.end()
});
app.use(bodyparser());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/seller', (req, res) => {
  var sellerName = req.body.sellerName;
  mongo.getSeller(sellerName, () => {
    console.log(res.body)
  }); //return array with a seller object inside
  res.end()
});