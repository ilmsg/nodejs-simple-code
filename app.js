var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World");
});

const port = process.env.PORT || '4000';
app.listen(port);
