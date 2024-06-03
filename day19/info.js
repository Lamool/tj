/*

    내정보 페이지
    1. 현재 로그인된 회원의 번호, 아이디, 이름, 연락처를 출력하시오.
    2. 회원탈퇴 버튼을 클릭하면 confirm 함수 활용해서 확인 선택시 탈퇴처리
    * 로그인된 회원 번호가 세션 저장소 사용
    * 탈퇴시 로그아웃 처리

*/

let memberList = [];

// 1. 회원정보 출력 함수 : 1.js 열렸을 때
info();

function info() {
    console.log('info()');

    // 1. 세션 저장소에 현재 로그인된 회원번호를 가져오기
    let loginNo = sessionStorage.getItem('loginNo');

    // 만약에 해당 세션 저장소에 현재 로그인된 회원번호가 없으면 로그인 페이지로

    if (loginNo == null) {
        alert('로그인후 가능한 페이지입니다.');
        location.href='login.html';
    }

    // 2. 현재 로그인된 회원번호를 가지고 회원목록에서 동일한 회원번호의 회원객체 찾기
    // 로컬 저장소에 있는 회원목록 호출
    memberList = JSON.parse(localStorage.getItem('memberList'));
    if (memberList == null) {
        memberList = [];
    }

    // 찾기
    for (let i = 0; i < memberList.length; i++) {
        // 만약에 i번째 회원의 번호와 로그인된 번호와 같으면
        if (memberList[i].no == loginNo) {
            // 특정 HTML 요소에 출력하기
            document.querySelector('#noBox').innerHTML = memberList[i].no;
            document.querySelector('#idBox').innerHTML = memberList[i].id;
            document.querySelector('#nameBox').innerHTML = memberList[i].name;
            document.querySelector('#phoneBox').innerHTML = memberList[i].phone;

            return;
        }
    }

}




// 2. 회원탈퇴 함수 : 회원탈퇴 버튼을 클릭했을 때 : 1. 삭제 버튼을 클릭했을 때
function _delete() {
    console.log("_delete()");

    // 1. 정말 탈퇴 하는지 확인받기, 확인 = true, 취소 = false
    let msg = confirm('정말 회원탈퇴 하실 건가요?');
    console.log(msg);

    // 2. 취소 했으면
    if (msg == false) return;

    // 3. 확인 했으면 탈퇴처리 진행
        // 1. 누구를(현재 로그인된 회원)
    let loginNo = sessionStorage.getItem('loginNo');
        // 2. 해당 loginNo의 회원객체 찾기
            // 1. 회원목록 내에서 로그인된 회원번호와 동일한 회원 찾기
    for (let i = 0; i < memberList.length; i++) {
            // 2. 만약에 회원목록내 i번째 회원객체나 번호와 로그인된 회원번호와 같으면
        if (memberList[i].no == loginNo) {
            // 3. 찾은 i번째 인덱스의 회원객체를 회원목록에서 삭제
            memberList.splice(i, 1);
            // 4. 회원목록/배열의 변화가 있기 때문에 localStorage에 적용하기 위해 setItem 사용
            localStorage.setItem('memberList', JSON.stringify(memberList));
            // 5. 1번만 탈퇴하기 때문에 탈퇴했을 경우 다음 반복문을 실행할 필요 없음
            alert('회원탈퇴 했습니다')
            break;  // for문 탈출
        }

    }       // for end
    logout();   //index.js파일에서 정의한 logout() 함수 호출
  
}       // function end

// 3. 수정페이지 이동
function update() {
    location.href="update.html";
}


