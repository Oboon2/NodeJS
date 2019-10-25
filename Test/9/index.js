var server = require('./server');
var handler = require('./requestHandler');
var database = require('./database');

function RuleCreator(path, method, callback) {
    this.path = path;
    this.method = method;
    this.function = callback;
};

var rule = [
    new RuleCreator('/', 'GET', handler.start),
    new RuleCreator('/register', 'GET', handler.showRegisterForm),
    new RuleCreator('/login', 'GET', handler.showLoginForm),
    new RuleCreator('/register', 'POST', handler.register),
    new RuleCreator('/login', 'POST', handler.login)
];
handler.connectDB(database);

server.serverStart(rule);