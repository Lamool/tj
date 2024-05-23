// 메모리 구성
let todoList = [];
let doo = [];


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

        html += `
                <li>
                    ${ currentTodo }
                    <button onclick="change(${i})" type="button">변경</button>
                    <button onclick="remove(${i})" type="button">삭제</button>
                </li>
                `
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
    
    
}