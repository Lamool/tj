
/*
  
  C(저장) : 회원가입          글쓰기                제품등록      주문등록
    JS메모리 저장               배열명.push()
    브라우저(크롬)메모리 저장     .setItem( 'key' , value );

  R(호출) : 로그인 , 내정보   전체글출력,개별글출력   제품출력      주문출력
    JS메모리 호출   전체호출:for문  , 개별호출 : 배열명[ ]
    브라우저(크롬)메모리 저장     .getItem( 'key' );

  U(수정) : 회원수정          글수정                제품수정      주문수정
    JS메모리 수정   배열명[].속성명 = 새로운값 

  D(삭제) : 회원탈퇴          글삭제                제품삭제      주문삭제
    JS메모리 삭제   배열명.splice( 인덱스 , 1 );
    브라우저(크롬)메모리 저장     .removeItem( 'key' );

*/


// ---------- 로그인 상태 유효성검사 ---------- //
// 1. 브라우저 세션에 저장된 로그인된 회원번호
let loginNo = sessionStorage.getItem('loginNo');
console.log(loginNo);
// 2. 만약에 없으면
if (loginNo == null) {
    alert('로그인후 글쓰기가 가능합니다');
    location.href="login.html";
}



let boardList = [];

function _write() {
    console.log("write()");

    boardList = JSON.parse(localStorage.getItem('boardList'));
    if (boardList == null) {
        boardList = [];
    }

    // 1. HTML 입력된 데이터 가져오기
    let title = document.querySelector('#title').value;
    let content = document.querySelector('#content').value;

    // 2. 유효성검사
    // 3. 데이터 가공(입력 외 추가 정보, 원하는 데이터형식 => 객체)
        // 작성자(로그인된 회원 = sessionStorage에 회원번호)
    let writer = '';                // 로그인된 회원의 아이디를 찾아서 넣을 변수 준비

    let memberList = [];            // localStorage에 있는 회원목록 호출
    memberList = JSON.parse(localStorage.getItem('memberList'));
    if (memberList == null) {
        memberList = [];
    }

    // 회원목록에서 로그인된 회원번호와 같은 객체 찾기
    for (let i = 0; i < memberList.length; i++) {
        if (memberList[i].no == loginNo) {
            writer = memberList[i].id;      // 찾은 객체의 아이디를 writer변수에 대입

            break;          // for문 탈출
            // return;      // 함수 탈출    // 현재 상황에서는 return 금지
        }
    }

    // 게시물 객체
    let board = {
        no : boardList.length == 0 ? 1 : boardList[boardList.length - 1].no + 1,                 // 게시물번호
        title : title,          // 게시물제목
        content : content,      // 게시물내용
        writer : writer,      // 게시물작성자
        date : new Date(),      // 게시물작성일
        view : 1                // 게시물조회수
    };

    // 4. 저장
    boardList.push(board);

    localStorage.setItem('boardList', JSON.stringify(boardList));

    // 5. 안내후 이후 처리
    alert('글쓰기 성공');

    location.href="board.html";     // JS에서 페이지 전환할 때 사용되는 속성

}






// 
// 
// 
// let memberList = [];
// let idx = -1;

// loginO();

// function loginO() {
//     console.log('loginO()');

//     // 1. 세션 저장소에 현재 로그인된 회원번호를 가져오기
//     let loginNo = sessionStorage.getItem('loginNo');

//     // 만약에 해당 세션 저장소에 현재 로그인된 회원번호가 없으면 로그인 페이지로
//     if (loginNo == null) {
//         alert('로그인 후 가능한 페이지입니다.');
//         location.href='login.html';
//     }

//     // 현재 로그인된 회원번호를 가지고 회원목록에서 동일한 회원번호의 회원객체 찾기
//     // 로컬 저장소에 있는 회원목록 호출
//     memberList = JSON.parse(localStorage.getItem('memberList'));
//     if (memberList == null) {
//         memberList = [];
//     }

//     // 찾기
//     for (let i = 0; i < memberList.length; i++) {
//         // 만약에 i번째 회원의 번호와 로그인된 번호와 같으면
//         if (memberList[i].no == loginNo) {
//             // 인덱스를 idx에 저장
//             idx = i;
//             console.log(loginNo);
//         }
//     }
// }



// // 글등록 함수
// function write() {
//     let title = document.querySelector('#title').value;
//     let content = document.querySelector('#content').value;

//     console.log(title);
//     console.log(content);
//     alert('등록 완료');



//     location.href='board.html';
// }






