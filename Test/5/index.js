var server = require('./server');
var router = require('./route');

server.serverStart(router.route);