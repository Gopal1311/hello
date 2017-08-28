var express = require('express')

var app=express()
var path =require('path')
app.use('/css',express.static(__dirname + '/css'))
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
app.set('view engine', 'html');

app.get('/',function(req,res){
res.render('main');
//	res.sendFile('index.html',{root:path.join(__dirname)})
})