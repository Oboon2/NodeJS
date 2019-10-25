// 모듈 추출
var mysql = require('mysql');

// 접속 열기
var client = mysql.createConnection({
    user : 'root',
    password : 'qwer1234'
});

// DB 연결
client.connect();

// 쿼리
client.query('use mall');
client.query('select * from orderdetail', function(error, result, fields) {
    if(error) {
        console.log(error);
    } else {
        console.log(result);
        client.end();
    };
});