var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');

//middlewares
app.use(bodyParser.json()); //is needed to use 'req.body' in job.js

consign({ cwd: 'app' })
  .include('models')
  .then('api')
  .then('routes')
  .into(app);

module.exports = app;