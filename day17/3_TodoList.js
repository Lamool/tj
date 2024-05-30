// 메모리 구성
let toDoList = [];                  // 샘플 공백

print();

// 입력/저장 함수
function add() {
    let toDoInput = document.querySelector('#toDoInput').value;
    let newToDo = {toDo: toDoInput, complete: 0};



    // 1. localstorage에 있는 todoList 가져오기
    let localData = JSON.parse(localStorage.getItem('localData'));
    console.log(localData);          // 처음에 켰을 때는 없으니까 null
    
    // 2. 가져온 toDoList(localstorage) 없으면 빈배열 대입, 존재하면 js배열에 대입
    if (localData == null) {
        toDoList = [];
    } else {
        toDoList = localData;
    }



    // 3.
    toDoList.push(newToDo);



    
    // .push 하면 JS메모리에 push 한 것이기 때문에
    // localstorage에도 보내주기 위해 setItem을 쓰는데
    // 그냥 보내주면 안 돼서 번역을(JSON 이거일 거야). localstorage 여기는 문자만

    // 4. 다시 localstorage에 toDoList를 저장하기
    localStorage.setItem('localData', JSON.stringify(toDoList));


    alert('할 일 저장 성공');

    print();
}



// 출력 함수
function print() {
    let localData = JSON.parse(localStorage.getItem('localData'));
    if(localData == null) {toDoList = [];}
    else {toDoList = localData;}





    
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

    // 여기 JS 메모리에서 삭제한 후 localstorage도 최신화를 시켜줘야 해서
    // 4. 다시 localstorage에 toDoList를 저장하기
    localStorage.setItem('localData', JSON.stringify(toDoList));


    // 어차피 print 부르니까
    // 저장할 때 get을 하는 이유 : 기존 것을 가져와야 하니까

    
    print();
}



// 변경 함수
function change(changeIndex) {
    if (toDoList[changeIndex].complete == 0) {
        toDoList[changeIndex].complete = 1;
    } else if (toDoList[changeIndex].complete == 1) {
        toDoList[changeIndex].complete = 0;
    }

    // 4. 다시 localstorage에 toDoList를 저장하기
    localStorage.setItem('localData', JSON.stringify(toDoList));

    print();
}
