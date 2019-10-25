// 모듈 추출
var mysql = require('mysql');

// 클라이언트 정보 설정
var client = mysql.createConnection({
    host : 'localhost',
    user :'root',
    password :'qwer1234',
    database : 'testdb'
});

// 연결
client.connect(function(error){
    if(error) {
        console.log(error);
    };
});

// 로그인 함수
function login(res, data) {
    var query = 'select * from testdb.userinfo where userid =? and password =?';
    client. query(query, [data.userid, data.password],function(error, results, fields) {
        if(error) {
            res.send('쿼리 검색 실패 : ' + error);
        } else {
            if(results.length > 0) {
                // OK
                res.send('로그인 성공');
            } else {
                // NO
                res.send('로그인 실패');
            };
        };
    });

};

// 등록함수
function register(res, data) {
    var query = 'select * from testdb.userinfo where userid=?';
    client.query(query, data.userid, function(error, results) {
        // ID 있음 = 가입 실패
        if(results.length > 0) {
            res.send('ID가 사용중 입니다');
        } else {
            // 가입
            query = 'insert into testdb.userinfo set?';
            client.query(query, data, function(error, results) {
                if(error) {
                    res.send('사용자 등록 실패 : ' + error);
                } else {
                    res.send('사용자 등록 성공 : ' + data.userid);
                };
            });
        };
    });
};
module.exports = {
    login : login,
    register : register
};