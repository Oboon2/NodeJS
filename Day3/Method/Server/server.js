var http = require('http');


function serverStart(route) {
    // 서버 객체 생성
    var server = http.createServer(function(req,res) {

        // 요청 방법 확인(GET/POST)
        var method = req.method;

        console.log( typeof route  );

        route(method, req, res);
    });
    server.listen(3000);
    console.log('서버 실행 중');
}

module.exports = {
    serverStart : serverStart
};