// 모듈 가져오기 및 변수에 저장하기
var http = require('http');
function serverStart(port, route){
    function onResponse(req, res) {
        var pathname = req.url;
        route(pathname, req, res);
    };
    var server = http.createServer(onResponse);
        server.listen(port);
        console.log('ruuning server')
};

// 모듈 내보내기
module.exports = {
    'serverStart' : serverStart
};

