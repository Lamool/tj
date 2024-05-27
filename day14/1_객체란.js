/*
  - 객체
    - 주체(subject) : '나' 라는 실체
    - 객체(object) : 주체(나) 가 아닌 다른 주체(타인) 
      즉 : 본인 이외의 다른 실체(주체) 의미
      
  - 프로그래밍 객체
    - 성질/속성/필드 , 행동/행위/메소드
    - 사람(주체/나) ---> 프로그램(객체/타인)
    - 즉 : 성질과 행동을 하나로 묶음 데이터/자료 
    - 인기가 많은 이유 : 생활속 모든 정의된(성질/행위)를 디지털화 할수 있다.코드화
  
  - 형태
    let 변수객체 = { 속성명 : 데이터 , 속성명 : 데이터 ~~ }
  
  - 예시 
    자동차 
      기아K3  
        - 성질 : 색상 , 타이어 , 의자 등등 
        - 행동 : 전진 , 후진 , 파킹 , 잠금 등등
      나의K3 와 친구 K3 는 서로 고유한 성질/행동 가질수 있다. 그러므로 다른 객체다.

  -문법 
    - 1. 선언 
      { 속성명 : 데이터 , 속성명 : 데이터 , 속성명 : 데이터 }
      - 속성명 : ' ' 문자처리는 생략 가능하지만 특수문자를 포함할 경우에는 문자처리 필수

    - 2. 호출 
      객체 전체 : 객체변수
      객체내 속성호출 : 
        1. 객체변수.속성명
        2. 객체변수['속성명']
    
    - 3. 수정 
      1. 속성내 데이터 수정 :  객체변수.속성명 = 새로운데이터
      2. 속성과 데이터 추가 : 객체변수.새로운속성명 = 새로운데이터

    - 4. 삭제 
      1. 속성 삭제 : delete 객체변수.속성명 

    - 다양한 속성값과 객체의 중첩 
      - { 
        속성명 : 데이터(문자,숫자,불리언,undefined등)
        속성명 : [ 데이터 , 데이터 , 데이터 ] ,
        속성명 : function(){  } , 
        속성명 : { }
      }
      - 실무 웹/앱 JSON형식의 데이터 활용 중요!!!
        JSON :  JavaScript Object Notation : js객체문법
        { 키:값 , 키:값 }  
        { 속성 : 데이터 }
        - 속성/키/필드/성질 명
        - 데이터/값  

    - 키워드
      . : 접근연산자  : 객체내 속성에 접근/호출 할때 사용되는 연산자/특수문자

*/
// 1. 객체 
console.log( { } ); // Object : { } , Array : [ ] , function ( ) 

let 객체변수 = { 이름 : '유재석' , age : 40 , '직업' : '연예인' , 'address-city' : '부평구'  }; // 변수에 객체/자료 를 담기.
// 2. 호출 
console.log( 객체변수 );
console.log( 객체변수.이름 );
console.log( 객체변수.age );
console.log( 객체변수.직업 );
// console.log( 객체변수.address-city); // 속성명에 특수문자 포함될 경우 오류 발생  
console.log( 객체변수["address-city"] ); // 속성명에 특수문자 있을경우 .접근연산자 말고 []연산자를 사용하자.

// 3. 수정.
객체변수.age = 50;     // 만일 있는 속성명일 경우 새로운 데이터 대입 
객체변수.money = 300; // 만일 없는 속성명에 데이터 대입할경우 새로운 속성명과 데이터가 추가 
console.log( 객체변수 );

// 4. 삭제 
delete 객체변수.money;      // 삭제할 속성명을 작성.
console.log( 객체변수 )
객체변수.직업 = undefined; // 속성은 있고 속성내 데이터가 없을때. undefined 또는 ''공백
console.log( 객체변수 )


// - 속성(문자열) , 데이터(자료)
  // 객체변수.속성명 = 배열자료
객체변수.쇼핑백 = [ '과자' , '음료' , '라면' ]
console.log( 객체변수 );

  // 객체변수.속성명 = 객체자료
객체변수.car = { 회사 : '기아' , 색상 : 'red' }
console.log( 객체변수 );

  // 객체변수.속성명 = 함수자료
객체변수.밥먹기 = function(){ console.log('밥먹기중') }
console.log( 객체변수 );
객체변수.밥먹기();