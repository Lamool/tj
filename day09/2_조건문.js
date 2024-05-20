/*
    - 문제조건 : 입력 prompt 함수 , 출력 console 함수 사용 
    - 문제
    - 1. 3개의 점수를 각 입력받아 총점 계산 하여 총점이 90 이상이면 '성공' 아니면 '실패' 출력하시오.
    - 2. 2개의 정수를 각 입력받아 더 큰수를 출력 하시오.
    - 3. 3개의 정수를 각 입력받아 더 큰수를 출력 하시오.
    - 4. 3개의 정수를 각 입력받아 오름차순 또는 내림차순 하여 정렬해서 출력하시오. 
    - 5. 1개의 점수를 입력받아 90점 이상이면 'A등급' 80점이상이면 'B등급' 70점이상 'C등급' 그외 '재시험' 출력하시오.
    - 6. 아이디와 비밀번호 입력받아 아이디가 'admin' 이고 비밀번호가 '1234' 이면 '로그인 성공' 아니면 '로그인실패' 출력하시오.
    - 7. 과일 배열 선언하고 let fruitList = [ '바나나' , '사과' ]
      하나의 과일명을 입력받아 fruitList 에 존재하는 과일이면 '이미 존재하는 과일입니다' 출력 
        아니면 배열에 입력받은 과일명 저장 하고 현재 배열을 출력하시오.
    - 8. 주민등록번호를 입력받아서 성별이 남자이면 색상변수에 'blue' 을 여자이면 'red' 을 대입 하고 색상변수 출력하시오.
    - 9. 가위바위보 게임 
     조건1 : 가위 0 , 바위 1 , 보 2 입니다.
     조건2 : 플레이어 2 명 입니다.
     실행조건 : 각 플레이어가 가위바위보 중에 한번씩 입력받기 
     출력조건 : 
        플레이어1 이겼을때 '플레이어1 승리' 출력 
        플레이어2 이겼을때 '플레이어2 승리' 출력 
        비겼을경우 '무승부' 출력 
    - 10. 좌석 3개의 상태를 가지는 배열 선언하고 let sheetList = [ 'O' , 'X' , 'O' ]
    하나의 좌석 순서번호를 입력받아 빈좌석 이면 '예약성공' 아니면 '예약불가' 출력하고
    빈좌석 : 'X'  사용중인좌석 : 'O'
*/



// 문제1. 3개의 점수를 각 입력받아 총점 계산 하여 총점이 90 이상이면 '성공' 아니면 '실패' 출력하시오.
// let score1 = Number(prompt('점수1 : '));
// let score2 = Number(prompt('점수2 : '));
// let score3 = Number(prompt('점수3 : '));

// let total = score1 + score2 + score3;

// if (total >= 90) console.log('성공');
// else console.log('실패');



// 문제2. 2개의 정수를 각 입력받아 더 큰수를 출력 하시오.
// let num1 = Number(prompt('정수1 : '));
// let num2 = Number(prompt('정수2 : '));

// if (num1 > num2) console.log(num1);
// else if (num1 < num2) console.log(num2);
// // else console.log(num1 + ' 두 수가 같다');



// 문제3. 3개의 정수를 각 입력받아 더 큰수를 출력 하시오.
// let num3 = Number(prompt('정수3 : '));
// let num4 = Number(prompt('정수4 : '));
// let num5 = Number(prompt('정수5 : '));

// if (num3 > num4)
//     if (num3 > num5) console.log(num3);
//     else console.log(num5);
// else
//     if (num4 > num5) console.log(num4);
//     else console.log(num5);

/*
    // 다른 사람 풀이
    // 3) 3개 정수 입력, 가장 큰 수 출력
    let score = [];

    score[0] = +prompt("정수1 입력");
    score[1] = +prompt("정수2 입력");
    score[2] = +prompt("정수3 입력");

    let largestNum = score[0];

    // if문을 각각 사용해 모든 경우 검사 
    if (largestNum < score[1]) { largestNum = score[1]; }
    if (largestNum < score[2]) { largestNum = score[2]; }

    console.log(largestNum);
*/



// 문제4. 3개의 정수를 각 입력받아 오름차순 또는 내림차순 하여 정렬해서 출력하시오.
// let numArray = [];
// let temp = 0;

// numArray[0] = Number(prompt('정수6 : '));
// numArray[1] = Number(prompt('정수7 : '));
// numArray[2] = Number(prompt('정수8 : '));

// if (numArray[0] > numArray[1]) {
//     temp = numArray[0];
//     numArray[0] = numArray[1];
//     numArray[1] = temp;
// } 
// if (numArray[0] > numArray[2]) {
//     temp = numArray[0];
//     numArray[0] = numArray[2];
//     numArray[2] = temp;
// } 
// if (numArray[1] > numArray[2]) {
//     temp = numArray[1];
//     numArray[1] = numArray[2];
//     numArray[2] = temp;
// }

// console.log(`오름차순 : ${numArray[0]} -> ${numArray[1]} -> ${numArray[2]}`);



// // 문제5.1개의 점수를 입력받아 90점 이상이면 'A등급' 80점이상이면 'B등급' 70점이상 'C등급' 그외 '재시험' 출력하시오.
// let score4 = Number(prompt('점수4 : '));

// if (score4 >= 90) console.log('A등급');
// else if (score4 >= 80) console.log('B등급');
// else if (score4 >= 70) console.log('C등급');
// else console.log('재시험');



// // 문제6. 아이디와 비밀번호 입력받아 아이디가 'admin' 이고 비밀번호가 '1234' 이면 '로그인 성공' 아니면 '로그인실패' 출력하시오.
// let id = prompt('아이디 : ');
// let password = prompt('비밀번호 : ');            // 앞에 0이 올 수도 있기에 비밀번호 문자열로 하는 게 좋다(?) Number 쓰는 것보다

// if (id == 'admin' && password == 1234) console.log('로그인 성공');
// else console.log('로그인 실패');



 /* 문제7. 과일 배열 선언하고 let fruitList = [ '바나나' , '사과' ]
        하나의 과일명을 입력받아 fruitList 에 존재하는 과일이면 '이미 존재하는 과일입니다' 출력 
        아니면 배열에 입력받은 과일명 저장 하고 현재 배열을 출력하시오. */
// let fruitList = ['바나나', '사과'];

// let fruit = prompt('과일 : ');

// if (fruitList[0] == fruit) console.log('이미 존재하는 과일입니다');
// else if (fruitList[1] == fruit) console.log('이미 존재하는 과일입니다');
// else {
//     fruitList[2] = fruit;
//     console.log(fruitList);
// }

/*
    // 다른 사람 풀이
    let fruitList = [ '바나나' , '사과' ];
    let fruit = prompt('과일명');
    if(fruitList.includes(fruit)){ console.log( '이미 존재하는 과일입니다.');}
    else{ fruitList.push(fruit); console.log(fruitList);}

    // 다른 사람 풀이2
    if (fruitList.indexOf(fruit) >= 0) {            // .indexOf -> 찾지 못하면 -1 반환
        console.log( '이미 존재하는 과일입니다.');
    }
    else{
        fruitList.push(fruit);
        console.log(fruitList);
    }
*/



// 문제8. 주민등록번호를 입력받아서 성별이 남자이면 색상변수에 'blue' 을 여자이면 'red' 을 대입 하고 색상변수 출력하시오.
let num = prompt('주민등록번호 : ');
let color = '';

if (num[7] == 1 || num[7] == 3) color = 'blue';
else if (num[7] == 2 || num[7] == 4) color = 'red';

console.log(color);

// 응용
let html = `<h3 style='color : ${color}'> 주민등록번호 : ${ num } </h3>`;
document.querySelector('#result1').innerHTML = html;



/*
    문제9. 가위바위보 게임 
     조건1 : 가위 0 , 바위 1 , 보 2 입니다.
     조건2 : 플레이어 2 명 입니다.
     실행조건 : 각 플레이어가 가위바위보 중에 한번씩 입력받기 
     출력조건 : 
        플레이어1 이겼을 때 '플레이어1 승리' 출력 
        플레이어2 이겼을 때 '플레이어2 승리' 출력 
        비겼을 경우 '무승부' 출력 
*/
let rsp1 = Number(prompt('플레이어1 : '));
let rsp2 = Number(prompt('플레이어2 : '));

if (rsp1 == 0) {
    if (rsp2 == 0) console.log('무승부');
    else if (rsp2 == 1) console.log('플레이어2 승리');
    else if (rsp2 == 2) console.log('플레이어1 승리');
} else if (rsp1 == 1) {
    if (rsp2 == 0) console.log('플레이어1 승리');
    else if (rsp2 == 1) console.log('무승부');
    else if (rsp2 == 2) console.log('플레이어2 승리');
} else if (rsp1 == 2) {
    if (rsp2 == 0) console.log('플레이어2 승리');
    else if (rsp2 == 1) console.log('플레이어1 승리');
    else if (rsp2 == 2) console.log('무승부');
}


// 2.
let answer = rsp1 == rsp2 ? 'draw' : rsp1 == (rsp2 + 1) % 3 ? 'p1 win' : 'p2 win';
console.log(answer);



/*
    문제10. 좌석 3개의 상태를 가지는 배열 선언하고 let sheetList = [ 'O' , 'X' , 'O' ]
        하나의 좌석 순서번호를 입력받아 빈좌석 이면 '예약성공' 아니면 '예약불가' 출력하고
        빈좌석 : 'X'  사용중인좌석 : 'O'
*/

let sheetList = [ 'O' , 'X' , 'O' ];
let idx = Number(prompt('좌석 순서번호 : '));

if (sheetList[idx - 1] == 'O') {
    console.log('예약불가');
} else if (sheetList[idx - 1] == 'X') {
    console.log('예약성공');
    sheetList[idx - 1] = 'O';
}




