// 1. 사용자가 입력한 번호 목록/배열
let 입력번호목록 = [];
// 2. 자동 생성된 번호 목록/배열
let 추첨번호목록 = [];

// 3. 6개의 수를 입력받아 입려번호목록에 저장
    // 조건 : 1~45 사이의 숫자만 가능, 중복제외
for (let i = 1; i <= 6; i++) {

    let 입력번호 = prompt(`${i}번째 숫자 입력 `);       // 3-1. 입력받고 변수에 저장한다.
        // Number(데이터) : 숫자타입 변환 함수, 만일 문자이면 NaN, 만일 공백이면 0
        // NaN (Not a Number) : NaN는 비교연산이 불가능 하므로 isNaN(데이터) 함수를 사용.
            // isNaN(데이터/변수) : 숫자가 아니면 true 숫자이면 false
    // ============ 조건1 ============ //
        // 만약에 입력된 번호가 1보다 작고 45보다 크거나 숫자가 아니면 취소
    if (입력번호 < 1 || 입력번호 > 45 || isNaN(입력번호)) {
        alert('선택할 수 없는 번호입니다.');
        i--;
        continue;       // 현재 i 값의 -1 차감하고 다시 for문의 증감식으로 이동
    }
    // ============ 조건2 ============ //
    if (입력번호목록.indexOf(입력번호) != -1) {     // 만약에 입력번호가 이미 배열에 존재하면
        alert('이미 선택한 번호입니다.');       // 안내문
        i--;
        continue;
    }

    입력번호목록.push(입력번호);        // 3-2. 입력받은 데이터를 배열에 저장한다.
}

// 4. 6개의 수를 난수/임의 생성해서 추첨번호목록에 저장
    // 조건 : 1~45 사이의 숫자만 가능, 중복제외
for (let i = 1; i <= 6; i++) {
    // 1. 난수 생성한다.
    // Math.random(); : 난수 생성 함수
    // let 생성번호 = Math.random();       // 0부터 1미만의 실수 생성
    // let 생성번호 = Math.random() + 1;      // 1부터 2미만의 실수 생성
    // let 생성번호 = Math.random() * 45 + 1;   // 0부터 45 미만의 실수 생성 -> + 1 -> 1부터 46 미만의 실수
    // - parseInt(실수) -> 정수 반환
    let 생성번호 = parseInt(Math.random() * 45 + 1);

    // ============ 조건1 ============ //
    if (추첨번호목록.indexOf(생성번호) >= 0) {
        i--;
        continue;       // 취소 하고 난수 재생성
    }

    // 2. 생성된 난수를 배열에 저장한다.
    추첨번호목록.push(생성번호);
}
// 5. 두 배열의 동일한 숫자가 몇 개인지 체크
let 일치수 = 0;
    // 0번 인덱스부터 마지막 인덱스까지
for (let i = 0; i <= 입력번호목록.length - 1; i++) {
    // i번째 입력번호목록의 값이 추첨번호목록에 존재하면
    if (추첨번호목록.indexOf(입력번호목록[i]) != -1) {
        일치수++;       // 일치수 1 증가
    }   // if end
}   // for end

// 6. HTML 출력
document.querySelector('#입력번호목록').innerHTML = 입력번호목록;
document.querySelector('#추첨번호목록').innerHTML = 추첨번호목록;
document.querySelector('#일치수').innerHTML = 일치수;
