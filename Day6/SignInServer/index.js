// 모듈 추출
var server = require('./server');
var handler = require('./requestHandler');
var database = require('./database');

// 라우트 규칙
function RuleCreator(path, method, callback) {
    this.path = path;
    this.method = method;
    this.function = callback;
};

// 규칙 객체 생성
var rule = [
    new RuleCreator('/', 'GET', handler.start),
    new RuleCreator('/register', 'GET', handler.showRegisterForm),
    new RuleCreator('/login', 'GET', handler.showLoginForm),
    new RuleCreator('/register', 'POST', handler.register),
    new RuleCreator('/login', 'POST', handler.login)
];

// DB 연결
handler.connectDB(database);

// 서버 실행
server.serverStart(rule);