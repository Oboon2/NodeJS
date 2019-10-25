var mysql = require('mysql');

var client = mysql.createConnection({
    user : 'root',
    password : 'qwer1234'
});

client.connect();

// DB 생성
function createDB(){
    console.log('DB 생성');
    client.query('create database nodejs');
};

// Table 생성
function createTable(){
    console.log('테이블 생성');
    client.query('create table nodejs.test(name varchar(20) not null, age int(5) not null)');
};

// 데이터 추가
function insert(){
    console.log('데이터 추가');
    client.query("insert into nodejs.test(name, age) values('Kim', 22), ('Park', 27), ('Lee', 31)");
}

// 데이터 조회
function read(){
    
    client.query('select * from nodejs.test', function(error, result, fields) {
        if(error) {
            console.log(error);
        } else {
            console.log(result);
            console.log('조회 성공');
            //client.end();
        };
    });
};

// 데이터 갱신
function update(){
    console.log('데이터 갱신');
    client.query("update nodejs.test set age = 25 where name = 'Kim'");
};

// 데이터 삭제
function deleteData(){
    console.log('데이터 삭제');
    client.query("delete from nodejs.test where age >= 26 and age <= 28;");
};

module.exports = {
    createDB : createDB,
    createTable :createTable,
    insert : insert,
    read : read,
    update : update,
    deleteData : deleteData
}