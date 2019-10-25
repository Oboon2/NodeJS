var server = require('./server');
var handler = require('./requestHandler.js');
var router = require('./router');

var rule = {
    '/' : handler.start,
    '/favicon.ico' : handler.favicon,
    '/upload' : handler.upload,
    '/show' : handler.show
};

// 서버 실행
server.serverStart(rule, router.route);