var http = require('http');
var express = require('express');
var multiparty = require('connect-multiparty');

// 라우터 설정
function setRouter(app, rule) {
    for (var key in rule) {
        if (rule[key].method === 'GET') {
            app.get(rule[key].path, rule[key].function);
        } else if (rule[key].method === 'POST') {            
            app.post(rule[key].path, rule[key].function);
        }
    }
}

function serverStart(rule) {

    var app = express();

    app.use(multiparty());

    setRouter(app, rule);

    http.createServer(app).listen(3000);
    console.log('서버 실행 중');
};

module.exports = {
    serverStart : serverStart
};