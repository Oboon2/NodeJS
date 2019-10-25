var express = require('express');

var app = express();

app.use(function(req,res){

    var name = req.query.name;
    res.send('name: ' + name);
    // res.send('Express 테스트 서버');

}).listen(3000);

console.log('Server running');