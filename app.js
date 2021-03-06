var express = require('express');
var app = express();
var favicon = require('serve-favicon');

app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(express.static('./public'));


app.get('/', function(req, res, next){
  res.sendFile(__dirname + '/public/views/index.html');
});

var port = 8080;
app.listen(process.env.PORT || port, function(){
  console.log("Port " + port + " is up and running, Captain.");
})
