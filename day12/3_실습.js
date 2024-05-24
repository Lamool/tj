/*
1. 요구사항 작성
 - 할 일을 입력 받아서 리스트에 등록해주세요.
 - 등록된 일정을 출력해주세요.
 - 등록된 일정을 변경하고 삭제할 수 있게 해주세요.
 - 변경 버튼을 눌렀을 때 색깔 변하게 해주세요.

2. 요구사항 파악
 [백엔드]
  1. 메모리 구성
	let toList = [];
	let do = [];

  2. 기능 구성
	add() {}
	remove() {}
	change() {}
	print() {}

  3. 기능 구현시 로직 순서
	1) 입력/저장 함수
		- 입력받고
		- 배열 저장
		- 안내
	2) 출력 함수
		- 입력한 내용이 ul 형식으로 출력
	3) 삭제 함수
		- 삭제하려고 하는 할 일의 버튼을 누르면 이 인덱스를 받아온다
		- 삭제한다
		- 출력한다
	4) 변경 함수
		- 변경하려는 인덱스를 누르면 그 인덱스를 받아온다.
		- 받아온 인덱스를 가지고 do 배열의 값을 확인한다.
			do = 0 (안 했다)
			do = 1 (했다)
		- 배경색이 바뀌고 취소선이 생긴다.
		- 출력한다.

 [프론트엔드]
  1. HTML 구성
	- input박스 1개
	- 버튼 3개
	- ul










<li>
            1교시 수업듣기
            <button onclick="" type="button">변경</button>
            <button onclick="" type="button">삭제</button>
        </li>
        <li>
            밥먹기
            <button onclick="" type="button">변경</button>
            <button onclick="" type="button">삭제</button>
        </li>
        <li>
            공부하기
            <button onclick="" type="button">변경</button>
            <button onclick="" type="button">삭제</button>
        </li>
		
		
*/


// 메모리 구성
let todoList = ['1교시 수업 듣기', '밥먹기', '공부하기'];
let doo = [0, 0, 0];


// 입력/저장 함수
function add() {
    // 1.
    let todoInput = document.querySelector('#todoInput');

    let todo = todoInput.value;

    todoList.push(todo);
    doo.push(0);

    alert('할 일 저장 성공');

    // for (let i = 0; i < doo.length; i++) {
    //     console.log(todoList[i]);
    //     console.log(doo[i]);
    // }

    print();
}


// 출력 함수
function print() {
    // 1. 어디에
    let ulli = document.querySelector('#ulli');

    // 2. 무엇을
    let html = ``;


    for(let i = 0; i < todoList.length ; i++) {
        let currentTodo = todoList[i];

        if (doo[i] == 0) {
            html += `
                    <li class="pink">
                        <p>${ currentTodo }</p>
                        <div>
                            <button onclick="change(${i})" type="button">변경</button>
                            <button onclick="remove(${i})" type="button">삭제</button>
                        </div>
                    </li>
                    `
        } else {
            html += `
            <li class="black">
                <p>${ currentTodo }</p>
                <div>
                    <button onclick="change(${i})" type="button">변경</button>
                    <button onclick="remove(${i})" type="button">삭제</button>
                </div>
            </li>
            `
        }
    }

    // 3. 대입 
    ulli.innerHTML = html;        console.log( html );
    console.log( doo[0] );

}



// 삭제 함수
function remove(deleteIndex) {
    todoList.splice(deleteIndex, 1);
    doo.splice(deleteIndex, 1);

    print();
}




// 변경 함수
function change(changeIndex) {
    if (doo[changeIndex] == 0) {
        doo[changeIndex] = 1;
    } else if (doo[changeIndex] == 1) {
        doo[changeIndex] = 0;
    }

    print();
    
}
