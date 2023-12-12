const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);

const io = socketIO(server);
const PORT = 8000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('chat');
})

io.on('connection', (socket) => {
    // [실습3] 채팅창 입장 안내 문구
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
    io.emit('notice', `${socket.id}님이 입장하셨습니다.`);
})

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})