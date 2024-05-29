/*
    달력 만들기

    [요구사항]
        1. <, > 화살표를 눌렀을 때 2024년 5월 글자 변하도록
                                달력도 같이 변하도록
        2. 날짜 칸 클릭 시 뭐 뜨게


    1. 메모리 구성
        

    2. 기능/서비스 구성
        1. 
*/

let date = new Date();          // 현재 날짜/시간을 반환해주는 클래스

let current = [{currentYear: date.getFullYear(),
                currentMonth: date.getMonth() + 1, 
                currentDay: date.getDay()}];

// let currentYear = date.getFullYear();       // 현재 날짜 년도 추출
// let currentMonth = date.getMonth() + 1;     // 현재 날짜 월 추출
// let currentDay = date.getDay();

print();



// 출력 함수
function print() {
    let html = '';

    html = `
            <button onclick="previousMonth(${current[0].currentYear}, ${current[0].currentMonth})" type="button" class="btn"> < </button>
            <h3>${current[0].currentYear}년 ${current[0].currentMonth}월</h3>
            <button onclick="nextMonth()" type="button" class="btn"> > </button>
           `;

    document.querySelector('#header').innerHTML = html;

    table();
}



// 이전 달로 넘기는 함수 (매개변수로 안 받아도 됨)
function previousMonth(cYear, cMonth) {
    if (cMonth == 1) {             // 현재 1월이면 년도는 -1, 월은 12월로
        current[0].currentYear = cYear - 1;
        current[0].currentMonth = 12;
    } else {
        current[0].currentMonth = cMonth - 1;
    }

    print();
}



// 다음 달로 넘기는 함수
function nextMonth() {
    if (current[0].currentMonth == 12) {         // 현재 12월이면 년도는 +1, 월은 1월로
        current[0].currentYear += 1;
        current[0].currentMonth = 1;
    } else {
        current[0].currentMonth += 1;
    }

    print();
}



// 테이블 출력
function table(){
    let last = new Date(current[0].currentYear, current[0].currentMonth, 0);
    last = last.getDate();                 // 월의 마지막 날짜를 구함

    let tableBody = document.querySelector('#tableBody');
    let html = '';
    let count = 1;          // 일
    let out = 0;

    for (let j = 1; j <= 5; j++) {
        if (out == 1) break;

        html += '<tr>'

        for (let i = 0; i < 7; i++) {
            html += `
                        <td>${count++}</td>
                    `;  

            if (count > last) {
                out = 1;
                break;
            }
        }

        html += '</tr>';
    }




    tableBody.innerHTML = html;

}
