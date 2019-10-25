var fs = require('fs');
var querystring = require('querystring');

function get(req, res){
    fs.readFile('./page.html', function(error, html) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(html);
        res.end();
    });
}
function post(req, res) {
    req.on('data', function(data) {
        var obj = querystring.parse(data.toString());
        console.log(data.toString());
        console.log(obj);

        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf8'});
        res.end(JSON.stringify(obj));
    });
}

module.exports = {
    get : get,
    post :post
}