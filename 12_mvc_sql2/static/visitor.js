const tbody = document.querySelector('tbody');

// 폼의 등록 버튼 클릭시
// - 테이블에 데이터 추가
function createVisitor() {
    const form = document.forms['visitor-form'];

    if (form.name.value.length === 0 || form.comment.value.length === 0) {
        alert('이름 또는 방명록 기입해주세요!');
        return;
    }

    // name 10글자 유효성 검사
    if (form.name.value.length > 10) {
        alert('이름은 10글자 미만입니다!');
        return;
    }

    axios({
        method: 'POST',
        url: '/visitor',
        data: {
            name: form.name.value,
            comment: form.comment.value
        }
    }).then((res) => {
        console.log(res.data);
        const data = res.data;

        const html = `
            <tr id="tr_${data.id}">
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.comment}</td>
                <td><button type="button">수정</button></td>
                <td><button type="button">삭제</button></td>
            </tr>
        `
        // insertAdjacentHTML: 특정 요소에 html 추가
        tbody.insertAdjacentHTML('beforeend', html);

    })
}

// 폼의 수정 버튼 클릭시
// - form input에 값 넣기
// - 변경, 취소 버튼 보이기
function editVisitor(id) {

    // (1) form input 값 넣기 (DB에서 값 받아서)
    axios({
        method: 'get',
        // 1) req.query (서버 -> /visitor) -> url: `visitor?id=${id}`
        // url: '/visitor?id=${id}'

        // 2) params 이용 -> req.query(서버 -> /visitor)
        url: '/visitor',
        params: {
            id: id
        }

        // ver2) (서버) req.params -> visitor/:id
        // url: `/visitor/${id}`
    }).then((res) => {
        console.log('editVisitor get data >', res.data);
        const {name, comment } = res.data;
        const form = document.forms['visitor-form'];

        form.name.value = name;
        form.comment.value = comment;
    })
}