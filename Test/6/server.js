var http = require('http');
var serverStart = function(rule, route) {
    http.createServer(function(req, res) {
        var path = req.url;
        route(rule, path, req, res);
    }).listen(3000);
    console.log('서버 실행 중');
};

module.exports = {
    serverStart : serverStart
}