function red() {
    return new Promise(function(reslove, reject) {
        setTimeout(function() {
            document.body.style.backgroundColor = 'red';
            reslove();
        }, 1000);
    })
}
function orange() {
    return new Promise(function(reslove, reject) {
        setTimeout(function() {
            document.body.style.backgroundColor = 'orange';
            reslove();
        }, 1000);
    })
}
function yellow() {
    return new Promise(function(reslove, reject) {
        setTimeout(function() {
            document.body.style.backgroundColor = 'yellow';
            reslove();
        }, 1000);
    })
}
function green() {
    return new Promise(function(reslove, reject) {
        setTimeout(function() {
            document.body.style.backgroundColor = 'green';
            reslove();
        }, 1000);
    })
}
function blue() {
    return new Promise(function(reslove, reject) {
        setTimeout(function() {
            document.body.style.backgroundColor = 'blue';
            reslove();
        }, 1000);
    })
}
red()
.then(function(){
    return orange();
})
.then(function(){
    return yellow();
})
.then(function(){
    return green();
})
.then(function(){
    return blue();
});


// async function exec() {
//     await red();
//     await orange();
//     await yellow();
//     await green();
//     await blue();
// }
// exec();


// Q1. resolve( 안은 비워도 되는가? )
// Q2. 콜백함수에 비해 무슨 이점이 있다는 건가..