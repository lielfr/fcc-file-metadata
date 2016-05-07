var port = process.env.PORT || 8080;
var express = require('express');
var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({storage: storage});
var app = express();

app.post('/upload', upload.single('myfile'), function(request, response, next) {
  var toReturn = {};
  toReturn.fileSize = request.file.size;

  response.writeHead(200, {'Content-Type': 'text/json'});
  response.end(JSON.stringify(toReturn));
});

app.use(express.static('public'));

app.listen(port, function() {
  console.log('Running on port '+port+'.');
});
