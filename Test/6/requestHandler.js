var fs = require('fs');
var formidable = require('formidable');

function start(req, res) {
    fs.readFile('./upload.html', function(error, html) {
        res.setHeader('Content-Type', 'text/html');
        res.end(html);
    });
};

function favicon(req, res) {
    fs.readFile('./icon.png', function(error, image) {
        res.setHeader('Content-Type', 'image/png');
        res.end(image);
    });
};

function upload(req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, function(error, fields, files) {
        console.log(files.image.path);

        fs.rename(files.image.path, './upload/image.png', function(error) {
            res.setHeader('Content-Type', 'text/html');
            res.end('<img src=/show />');
        });
    });
};

function show(req, res) {
    fs.readFile('./upload/image.png', function(error, image) {

        res.setHeader('Content-Type', 'image/png');
        res.end(image);
    });
};

module.exports = {
    start :start,
    favicon : favicon,
    upload : upload,
    show : show
};