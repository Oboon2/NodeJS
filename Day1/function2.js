// 함수를 변수에 저장
var add = function(a, b)
{
    return a + b;
}

// 함수 호출
var result = add(10, 20);



// 함수를 인자로 넘기기
function test2(test){
    test();
}

test2(function(){
    console.log('Hello World');
})

// console.log(result);