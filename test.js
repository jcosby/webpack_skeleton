var express = require('express'),
  path = require('path'),
  app = express();

app.set('port', 3000);

app.use(express.static(path.join))
