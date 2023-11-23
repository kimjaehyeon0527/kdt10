function call(name) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(name);
            resolve(name);
        }, 1000);
    })
}
function back() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('back');
            resolve('back');
        }, 1000);
    })
}
function hell() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('callback hell');
        }, 1000);
    })
}
async function exec() {
    try {
        let name = await call('kim');
        console.log(name + "반가워");
        let txt = await back('back');
        console.log(txt + '을 실행 했구나');
        let message = await hell('callback hell');
        console.log('여기는' + message);
    }   catch (error) {
        console.log(error);
    }
}

// exec();

// 실습 해설
async function exec1() {
    const name = await call('kim');
    console.log(`${name} 반가워!`);

    const txt = await back();
    console.log(`${txt}을 실행했구나!`);

    const msg = await hell();
    console.log(msg);
}
exec1();