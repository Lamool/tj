// 메모리 구성
let toDoList = [{toDo: '1교시 수업듣기', complete: 0}, {toDo: '밥먹기', complete: 1}, {toDo: '공부하기', complete: 1}];

// 입력/저장 함수
function add() {
    let toDoInput = document.querySelector('#toDoInput').value;

    toDoList.push({toDo: toDoInput, complete: 0});

    alert('할 일 저장 성공');

    print();
}



// 출력 함수
function print() {
    let ulli = document.querySelector('#ulli');

    let html = ``;

    for (let i = 0; i < toDoList.length; i++) {
        let currentToDo = toDoList[i].toDo;


        if (toDoList[i].complete == 0) {
            html += `
                    <li class="pink">
                        <p>${currentToDo}</p>
                        <div>
                            <button onclick="change(${i})" type="button">변경</button>
                            <button onclick="remove(${i})" type="button">삭제</button>
                        </div>
                    </li>
                    `;
        } else {
            html += `
                    <li class="black">
                        <p>${currentToDo}</p>
                        <div>
                            <button onclick="change(${i})" type="button">변경</button>
                            <button onclick="remove(${i})" type="button">삭제</button>
                        </div>
                    </li>
                    `;
        }
    }

    ulli.innerHTML = html;
    console.log( html );
}



// 삭제 함수
function remove(deleteIndex) {
    toDoList.splice(deleteIndex, 1);
    // delete toDoList[deleteIndex].complete;
    
    print();
}



// 변경 함수
function change(changeIndex) {
    if (toDoList[changeIndex].complete == 0) {
        toDoList[changeIndex].complete = 1;
    } else if (toDoList[changeIndex].complete == 1) {
        toDoList[changeIndex].complete = 0;
    }

    print();
}
