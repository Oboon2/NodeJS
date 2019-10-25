// 객체 만들기
// Hash Table (키-값)
var person = {
    name : 'WooSeok',
    age : 26,
    printName : () => {
        console.log(person.name);
    }
}

// 데이터 접근
var myName = person['name'];
console.log(myName);
person.printName();