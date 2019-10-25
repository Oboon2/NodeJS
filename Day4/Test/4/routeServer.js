var http = require('http');

http.createServer(function(req,res){
    console.log(req.url);
    var pathname = req.url;
    if (pathname === '/') {
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf8'});
        res.end('기본 페이지');
    } else if (pathname === '/start') {
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf8'});
        res.end('Start 페이지');
    } else if (pathname === '/show') {
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf8'});
        res.end('Show 페이지');
    } else {
        res.writeHead(404, {'Content-Type' : 'text/html; charset=utf8'});
        res.end('404 Not found');
    }
}).listen(3000);
console.log('서버 실행 중');