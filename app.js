<<<<<<< HEAD
var express = require('express');
var app = express();
=======
'use strict';

const express = require('express');
const app = express();
>>>>>>> 351aa8b76be8ca6c0ad40570023f0ca5bcb31dfd

app.get('/',function(req,res) {
  res.send("Hello World");
});

<<<<<<< HEAD
const port = process.env.PORT || '4000';
app.listen(port);

module.exports = app;
=======
app.listen(4000);
>>>>>>> 351aa8b76be8ca6c0ad40570023f0ca5bcb31dfd
