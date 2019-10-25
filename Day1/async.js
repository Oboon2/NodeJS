function start(){
    console.log('시작');
}
function mid(){
    console.log('중간');
}
function end(){
    console.log('종료');
}

start();

setTimeout(mid, 2000);
//mid();
end();