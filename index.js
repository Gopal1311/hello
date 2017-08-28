var express = require('express')

var app=express()
var path =require('path')

app.set('port', (process.env.PORT || 5000));

app.use('/css',express.static(__dirname + '/css'))

app.get('/', function(request, response) {
  response.render('index.html');
});

// app.get('/',function(req,res){

// 	res.sendFile('index.html',{root:path.join(__dirname)})
// })