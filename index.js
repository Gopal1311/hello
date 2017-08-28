var express = require('express')

var app=express()
var path =require('path')
app.use('/css',express.static(__dirname + '/css'))

app.listen(1326,function(){

	console.log('server is listen 1326')
})

app.get('/',function(req,res){

	res.sendFile('index.html',{root:path.join(__dirname)})
})