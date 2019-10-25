var fs = require('fs');
var http = require('http');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// app 객체 생성
var app = express();

// 미들웨어 설정
app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended : false
}));

// 라우팅 설정
app.get ('/', function(req, res){
    // 로그인 여부 확인
    if(req.cookies.auth) {
        res.send('로그인 성공');
    } else {
        // 로그인 페이지로 이동
        res.redirect('/login');

    }
});

app.get('/login',function(req, res){
    // 로그인 페이지 HTML 파일 읽어서 요청 응답
    fs.readFile('./login.html', function(error, html){
        if(error) {
            res.send(error);
        } else {
            res.send(html.toString());
        };
    });
});

app.post('/login',function(req, res){
    // 쿠키를 생성합니다
    var login = req.body.login;
    var password = req.body.password;

    // 출력합니다
    console.log(login, password);
    console.log(req.body);

    // 로그인을 확인합니다
    if(login == 'qwer' && password == '1234') {
        // 로그인 성공
        console.log('로그인 성공');
        res.cookie('auth', true);
        res.redirect('/');
    } else {
        // 로그인 실패
        console.log('로그인 실패');
        res.redirect('/login');
    };
});


// 서버 객체 생성 요청 및 대기
http.createServer(app).listen(3000);
console.log('서버 실행 중');