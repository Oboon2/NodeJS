function route(rule, path, req, res) {
    if(typeof rule[path] === 'function') {
        rule[path](req, res);
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode(404);
        res.end('Page Not Found');
    };
};

module.exports = {
    route : route
};