'use strict';

const express = require('express');
const app = express();

app.get('/',function(req,res) {
  res.send("Hello World");
});

const port = process.env.PORT || '4000';
app.listen(port);

module.exports = app;
