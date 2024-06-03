let memberList = [];
let idx = -1;

loginO();

function loginO() {
    console.log('loginO()');

    // 1. 세션 저장소에 현재 로그인된 회원번호를 가져오기
    let loginNo = sessionStorage.getItem('loginNo');

    // 만약에 해당 세션 저장소에 현재 로그인된 회원번호가 없으면 로그인 페이지로
    if (loginNo == null) {
        alert('로그인 후 가능한 페이지입니다.');
        location.href='login.html';
    }

    // 현재 로그인된 회원번호를 가지고 회원목록에서 동일한 회원번호의 회원객체 찾기
    // 로컬 저장소에 있는 회원목록 호출
    memberList = JSON.parse(localStorage.getItem('memberList'));
    if (memberList == null) {
        memberList = [];
    }

    // 찾기
    for (let i = 0; i < memberList.length; i++) {
        // 만약에 i번째 회원의 번호와 로그인된 번호와 같으면
        if (memberList[i].no == loginNo) {
            // 인덱스를 idx에 저장
            idx = i;
            console.log(loginNo);
        }
    }
}



// 글등록 함수
function write() {
    let title = document.querySelector('#title').value;
    let content = document.querySelector('#content').value;

    console.log(title);
    console.log(content);
    alert('등록 완료');



    location.href="board.html";
}