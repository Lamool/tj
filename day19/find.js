/*

    1. 아이디 찾기
        - 이름과 연락처를 입력받아 일치한 정보 찾기
        - 찾은 아이디를 특정 div에 출력 하시오.
    2. 비밀번호 찾기
        - 아이디와 연락처를 입력받아 일치한 정보 찾기
        - 찾은 비밀번호를 특정 div에 출력하시오.

*/

let memberList = [];

// 1. 아이디 찾기 함수
function findId() {
    let name = document.querySelector('#name').value;
    let phone = document.querySelector('#phone').value;

    let id = '';
    let html = '';
    let noFindId = 0;

    memberList = JSON.parse(localStorage.getItem('memberList'));
    if (memberList == null) {
        memberList = [];
    }

    for (let i = 0; i < memberList.length; i++) {
        if (memberList[i].name == name && memberList[i].phone == phone) {
            id += memberList[i].id;
            noFindId = 1;
            break;
        }
    }

    if (noFindId == 0) {
        alert('아이디를 찾을 수 없습니다. 정보를 다시 입력해주세요.')
    } else {
        let idYou = document.querySelector('#idYou');

        html += `아이디 : ${id}`;

        idYou.innerHTML = html;
    }

}



// 1. 비밀번호 찾기 함수
function findPw() {
    let id = document.querySelector('#id').value;
    let phone1 = document.querySelector('#phone1').value;

    let pw = '';
    let html = '';
    let noFindPw = 0;

    memberList = JSON.parse(localStorage.getItem('memberList'));
    if (memberList == null) {
        memberList = [];
    }

    for (let i = 0; i < memberList.length; i++) {
        if (memberList[i].id == id && memberList[i].phone == phone1) {
            pw += memberList[i].pw;
            noFindPw = 1;
            break;
        }
    }

    if (noFindPw == 0) {
        alert('비밀번호를 찾을 수 없습니다. 정보를 다시 입력해주세요.')
    } else {
        let pwYou = document.querySelector('#pwYou');

        html += `비밀번호 : ${pw}`;

        pwYou.innerHTML = html;
    }

}