var http = require('http');

http.createServer(function(req,res){
    console.log(req.url);
    var pathname = req.url;
    if (pathname === '/') {

        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf8'});
        res.end('테스트 서버');

    }

}).listen(3000);
console.log('서버 실행 중');