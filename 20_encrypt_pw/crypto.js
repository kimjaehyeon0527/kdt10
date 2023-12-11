// crypto - nodejs 내장 모듈
const { log } = require('console');
const crypto = require('crypto');

// 1. crypto "단방향" 암호화 구현
// createHash()
// : 지정한 해시 알고리즘으로 해시 객체를 생성하는 암호화 방식

// - password를 sha512 알고리즘 방식으로 암호화 하고,
// - base64 방식으로 인코딩하여 리턴하는 함수
const createHashedPW = (password) => {
    // createHash('알고리즘').update('암호화할 값').digest('인코딩 방식')
    return crypto.createHash('sha512').update(password).digest('base64')
}

// 해시 함수의 한계 : 레인보우 테이블
// => 암호화된 비번을 빠르게 역추적해서 원본 비번을 찾아낼 수 있음.

console.log(createHashedPW('1234'));
console.log(createHashedPW('1234'));    // 같은 pw라면 같은 해시 값
console.log(createHashedPW('2345'));

// 2. pbkdf2Sync(비밀번호, 솔트 반복횟수, 키의 길이, 알고리즘)
// - 비밀번호 기반으로 키를 도출하는 함수, 주로 비번 저장시 사용한다.
// - buffer 형식의 데이터를 반환하기 때문에 -> toString() 이용해서 문자열로 반환 시켜준다.
// 솔트는 의미의 값으로 사용자 마다 다 다른 솔트값이 들어가기 때문에 새로 입력했을 때의 값이 비밀번호를 이용해 나오는 값과 같은지 비교하려면 솔트를 기억해야한다.

// 1) 단방향 암호화 생성 함수
// - 1. 임의의 솔트 값을 생성
// - 2. 해당 솔트와 제공된 비밀번호를 기반으로 해시 생성
// - 3. 생성된 솔트와 해시를 반환해준다.
function saltAndHashPw(password) {
    // 솔트 생성
    const salt = crypto.randomBytes(16).toString('base64');     // 임의의 salt 생성.

    const iteration = 100;      // 해시 함수를 반복할 횟수
    const keylen = 64;          // 생성할 키의 길이
    const algorithm = 'sha512';

    // hash 생성 => salt랑 password를 결합해서 해시를 생성한다.
    // 이 hash가 암호화된 비밀번호가 된다!
    const hash = crypto.pbkdf2Sync(password, salt, iteration, keylen, algorithm).toString('base64');    
    // buffer => string으로 변환

    return { salt, hash };  // 솔트랑 해시 반환!
}

// 2) 암호 비교 함수
// : inputPW = 제공된 비번, salt, hash를 기반으로 새로운 해시를 생성하고, 
// 새로운 해시와 저장된 savedHash를 비교
// 제공된 비번이랑 원래 비번이 같으면 두 해시 값도 일치
function checkPW(inputPW, savedSalt, savedHash) {
    const iteration = 100;      // 해시 함수를 반복할 횟수
    const keylen = 64;          // 생성할 키의 길이
    const algorithm = 'sha512';

    const hash = crypto.pbkdf2Sync(inputPW, savedSalt, iteration, keylen, algorithm).toString('base64'); 

    return savedHash === hash;      // 새로 만든 hash와 저장된 hash와 같은지 아닌지 비교    // 같다면 true, 다르면 false 값 반환
}

// 두개의 함수 사용 예제
const password = '1234!';

// 비번 암호화
const { salt, hash } = saltAndHashPw(password);     // salt, hash 값 구조분할 해서 바로 반환 받기.
console.log(`비번 암호화에 쓰인 salt >> ${salt}, \n암호화 된 hash >> ${hash}`);

// 비밀번호 확인
const inputPW = '1234';
const isMatch = checkPW(inputPW, salt, hash);       // true or false
console.log(`비밀번호 일치 : ${isMatch}`);