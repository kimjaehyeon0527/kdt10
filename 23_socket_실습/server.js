const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);

const io = socketIO(server);
const PORT = 8000;

// 사용자 아이디 모음 객체
const userObjs = {};

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('chat');
})

io.on('connection', (socket) => {
    // [실습 3] 채팅창 입장 안내 문구
    /**
     *  같은 채팅방이니까
        한쪽에 다른 유저가 접속하더라도 다른쪽(다른 브라우저 탭)에도 나와야 한다.

        emit() from server
        1. socket.emit(event_name, data) : 해당 클라이언트에게만 이벤트, 데이터를 전송.
        2. io.emit(event_name, data) : 서버에 접속된 모든 클라이언트에 전송한다.

        // 다른 클라이언트에게 보낼 때
        3. io.to(소켓 아이디).emit(event_name, data) : 소켓 아이디에 해당하는 클라이언트에게만 전송
    */
    // 전체 클라이언트에게 전송.
    // io.emit('notice', `${socket.id}님이 입장하셨습니다.`);   // 실습 5 일땐 꺼주기.

    
    // [실습 4]
    socket.on('send', (data) => {
        console.log('send 이벤트로 받은 data >', data);
        // { id: 'S68gVxDsHEZqh3rWAAAD', msg: '안녕' / dm = ?}
        // io.emit('newMessage', data); // 실습 5 일땐 주석
        // [실습 5 DM인지 아닌지 구분]
        //  dm: io.to(소켓아이디).emit() => 소켓 아이디에 해당하는 클라이언트에게만 전송

        if(data.dm === 'all') {
            // "전체" 한테 발송
            io.emit('newMessage', {id: data.id, msg: data.msg});
        } else {
            // "DM" 발송
            const dmSocketId = data.dm;
            const sendData = {
                id: data.id,
                msg: data.msg,
                dm: '(DM) ',
            }
            // dm을 받는 사람한테 메세지 갔음.
            io.to(dmSocketId).emit('newMessage', sendData)
            // dm을 보낸 사람한테 자기자신의 메세지를 띄워줘야한다.
            socket.emit('newMessage', sendData);
        }
    })

    // [실습 5] DM Step1
    socket.on('setUserList', (data) => {
        console.log(`유저 입장 : `, data.id);
        // 입장 전체 공지
        io.emit('notice', `${data.id}님이 입장하셨습니다.`);

        // 전체 사용자 아이디 모음 객체 전달
        // 새로운 유저
        // {data.id : data.id} // 소켓 아이디 키 값으로 소켓 아이디 밸류 값을 넣어줌.
        userObjs[data.id] = data.id;
        socket.emit('entrySuccess', socket.id);     // 현재 입장한 사람에게 입장 완료
        io.emit('updateUsers', userObjs);    // 전체 사용자에게 사용자 업데이트 
    })

})

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})