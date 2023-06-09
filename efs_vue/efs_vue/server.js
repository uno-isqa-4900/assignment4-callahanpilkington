// // server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port, function(error) {
    if (error) {
      console.error('Error starting server:', error);
    } else {
      console.log('Server started on port', port);
    }
  });


