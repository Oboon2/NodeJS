var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

// 라우터 설정 함수
function setRouter(app, rule) {
    for (var ix in rule) {
        if (rule[ix].method === 'GET') {
            app.get(rule[ix].path, rule[ix].function);
        } else if (rule[ix].method === 'POST')  {
            app.post(rule[ix].path, rule[ix].function);
        } else if (rule[ix].method === 'PUT')  {
            app.put(rule[ix].path, rule[ix].function);
        } else if (rule[ix].method === 'DELETE')  {
            app.delete(rule[ix].path, rule[ix].function);
        };
    };
};

function serverStart(rule) {
    // 앱 객체 생성
    var app = express();
    // 미들 웨어 설정
    app.use(bodyParser());
    // 라우터 설정
    setRouter(app, rule);

    http.createServer(app).listen(3000);
    console.log('서버 실행 중');
};

module.exports = {
    serverStart : serverStart
};