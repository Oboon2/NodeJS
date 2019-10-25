function makeFunction(){
    return function(){
        console.log('Hello World');
    }
}

var test = makeFunction();
test();