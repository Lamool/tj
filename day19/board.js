/*

    전체 글 출력 페이지
        - 글 등록시 모든 게시물이 localStorage 저장된 상태

*/

// 1. 출력함수 : js가 열렸을 때
boardPrint();

function boardPrint() {
    boardList = JSON.parse(localStorage.getItem('boardList'));
    if (boardList == null) {
        boardaList = [];
    }

    // 1. 어디에
    let boardTbody = document.querySelector('#boardTbody');

    // 2. 무엇을
    let html = '';

    for (let i = 0; i < boardList.length; i++) {
        html += `<tr>
                    <td>${boardList[i].no}</td>
                    <td> <a href="view.html?no=${boardList[i].no}"> ${boardList[i].title} </a> </td>
                    <td>${boardList[i].writer}</td>
                    <td>${boardList[i].date}</td>
                    <td>${boardList[i].view}</td>
                </tr>`;   
    }

    // 3. 출력/대입
    boardTbody.innerHTML = html;

}


