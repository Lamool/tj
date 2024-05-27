/*
    비회원제 게시판 day13 1_실습

    - day13
        let boardList = [ 
            "제목입니다,내용입니다,1234,2024-05-24,3" , 
            "두번째제목이야,또내용입니다,4567,2024-05-25,0" 
        ];

    - day14
        게시판 정보 : 제목, 내용, 비밀번호, 날짜, 조회수
        게시물 객체 = { 제목 : , 내용 : , 비밀번호 : , 날짜 : , 조회수 : }
            - 만일 게시물 객체가 여러 개이면 배열을 사용하자
            게시물목록 = [게시물객체, 게시물객체, 게시물객체]
            - 여러 객체들을 식별할 때 인덱스는 문제점이 있다. 인덱스는 절대적인 식별자 역할을 못함.
            - 게시물번호 만들어보자. = 삭제/수정돼도 고정으로 사용하자.

*/

let boardList = [
    {번호 : 1, 제목 : '제목입니다', 내용 : '내용입니다', 비밀번호 : '1234', 작성일 : "2024-05-24", 조회수 : 3},
    {번호 : 2, 제목 : '두번째제목이야', 내용 : '또내용입니다', 비밀번호 : '4567', 작성일 : "2024-05-25", 조회수 : 0}
];    // 배열 선언 끝

// 0. 식별번호 자동생성
let autoNum = 2;


// 1. 등록함수 실행조건 : 1.등록버튼을 클릭했을때 
function _create(){ 
    // 1-1 
    let title = document.querySelector('#titleInput').value;
    let content = document.querySelector('#contentInput').value;
    let password = document.querySelector('#passwordInput').value;
    // 2-1 입력받지 않은 데이터를 초기화 
    let date = new Date(); // new Date() : 현재 날짜/시간 를 반환해주는 클래스; 
      console.log( date );
      console.log( date.getFullYear() ); // 연도 만 추출                   2024
      console.log( date.getMonth() ); // 월 만 추출 ( 1월:0  ~ 12월:11 )    4[5월]
      console.log( date.getDate() ); //  일 만 추출                         24
      console.log( date.getHours() ); // 시 만 추출                       11
      console.log( date.getMinutes() ); // 분 만 추출                     17
      console.log( date.getSeconds() ); // 초 만 추출                     42
    // 원하는 날짜 추출 해서 가공 
    let currentYear = date.getFullYear(); 
    let currentMonth = date.getMonth()+1 < 10 ? "0"+(date.getMonth()+1) : date.getMonth()+1 ;
    let currentDay =  date.getDate() < 10 ? "0"+date.getDate() : date.getDate();
    date = `${ currentYear }-${ currentMonth }-${ currentDay }` // 날짜 구성 
  
    let view = 0; // 처음 등록시 조회수는 0부터 시작
  
    // 3. *, 구분이 아닌 객체형식으로 만들어보자
    // let board = `${title},${content},${password},${date},${view}`; console.log( board );

    // 게시물번호 1증가 = 수정
    autoNum += 1;

    let board = {번호 : autoNum, 제목 : title, 내용: content, 작성일 : date, 조회수 : view, 비밀번호 : password}
    // 4. 배열 등록 
    boardList.push( board ); console.log( boardList ); 
    alert('등록성공') // 5. 등록 성공 
    _allRead(); // 등록성공시 전체출력 함수 호출 
}



// 2.
_allRead(); // js에서 해당 함수 1번 실행
function _allRead() {
    // 1. 어디에
    let tableBody = document.querySelector('#tableBody');

    // 2. 무엇을
    let html = '';


    for (let i = 0; i < boardList.length; i++) {
        let board = boardList[i];
        html += `<tr>
        <td> ${board.번호} </td>
        <td> ${board.제목} </td>
        <td> ${board.작성일} </td>
        <td> ${board.조회수} </td>
        </tr>`
    }

    //3. 출력
    tableBody.innerHTML = html;

}



 // 3. 개별출력 실행조건 : (누구를) 1.제목 클릭했을때
function _read( 번호 ){
    console.log('내가 클릭한 게시물번호 : ${번호}');

    // 1. 어디에
    let viewPage = document.querySelector('#viewPage')

    // - 내가 클릭한 게시물 번호의 객체를 배열에서 찾자.
    let findIndex = -1; // 못찾았다(인덱스가 없다는 뜻 - 1) 를 기본값
    for (let i = 0; i < boardList.length; i++) {
        if (boardList[i].번호 == 번호) {findIndex = i; break;}

    }

let board = boardList[findIndex];       // 찾은 인덱스의 게시물의 객체

    // 2. 무엇을
    let html = `<h3> 상세 페이지 </h3>
              <div> ${ boardList [findIndex], 제목 } </div>
              <div> 
                <span> 조회수 : ${  } </span> 
                <span> 작성일 : ${ boardArray[3] } </span>
              </div>
              <div> ${ boardArray[1] } </div>
              <button onclick="_update( ${ index } )">수정</button>
              <button onclick="_delete( ${ index } )">삭제</button>`;

    // 3. 출력
    viewPage.innerHTML = html;

}






// 5. 삭제함수 실행조건 : (누구를)1. 삭제버튼 클릭할때 
function _delete(번호){
    // 패스워드 검증 함수를 호출후 반환값이 false 이면 삭제함수 강제종료 
    if( _pwConfirm(index) == false ) return;
  
    // 배열내 특정 인덱스 삭제 
    boardList.splice( index , 1 );
    // 화면 새로고침( 재 출력: 데이터 변화가 있기 때문에  )
    _allRead();
    document.querySelector('#viewPage').innerHTML = ``;
  
  }



// - 게시물 번호를 이용한 특정 하나의 게시물의 인덱스를 찾아주는 함수
function findBoardIndex (번호) {
      // - 내가 클릭한 게시물 번호의 객체를 배열에서 찾자.
      let findIndex = -1; // 못찾았다(인덱스가 없다는 뜻 - 1) 를 기본값
      for (let i = 0; i < boardList.length; i++) {

          if (boardList[i].번호 == 번호) {findIndex = i; return findIndex;}

    }

    // 만약에 못찾았다 -1
    return findIndex;


}








// 4. 수정함수 실행조건 : (누구를)1. 수정버튼 클릭할떄  
function _update( 번호 ){
    let findIndex = findBoardIndex(번호);   // 내가 선택한 게시물 번호를 findBoardIndex 함수에 매개변수로 전달하면 찾은 인덱스 반환, 없으면 -1
    if (findIndex == -1) { return; }


    
    // 패스워드 검증
    if( _pwConfirm(findIndex) == false ) return;
  
    
    // 입력
    let utitle = prompt('수정할제목');
    let ucontent = prompt('수정할내용');
    
    // 찾은 인덱스의 객체 속성내 값 수정
    boardList[findIndex].제목 = utitle;
    boardList[findIndex].내용 = ucontent;


    
    // 페이지 새로고침
    _allRead();
    _read( 번호 );
  }




  
// 6. 패스워드 체크 함수 
function _pwConfirm( index ){
    let confirmPw = prompt('비밀번호:');
    if( confirmPw != boardList[index].비밀번호 ){
      alert('패스워드가 다릅니다. ');
      return false ; 
    }
    return true; 
  }
  
  