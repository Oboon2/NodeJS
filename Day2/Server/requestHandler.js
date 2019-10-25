// 모듈 가져오기 및 변수에 저장하기
var fs = require('fs');

// 응답 함수
function start(req, res) {
    // 헤더 설정
    // 상태코드, MIME TYPE
    res.writeHead(200, {'Content-Type' :  'text/plain'});
    // 데이터 전달
    res.write('First NodeJS Server');
    res.end();
}
function favicon(req, res) {
    // 1. 파비콘 이미지 읽기
    // 2. 읽어 온 이미지 전달하기
    fs.readFile('./icon.png', function(error, data) {
        // 헤더 쓰기
        res.writeHead(200, {'Content_Type' : 'image/png'});
        // 데이터 전달(이미지)
        res.write(data);
        // 종료
        res.end();
    });
}

// 모듈 내보내기
module.exports = {
    'start' : start,
    'favicon' : favicon
};