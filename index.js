var express = require('express')

var app=express()
var path =require('path')
app.use('/css',express.static(__dirname + '/css'))
app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'html');

app.get('/',function(req,res){
res.render('main');
//	res.sendFile('index.html',{root:path.join(__dirname)})
})