let depList = [
    {depNum: 0, depName: '개발부서', depPhone: '010-1111-2222'}
];

부서출력();

// 부서정보 추가 함수
function 부서등록() {
    let depNum = depList.length != 0 ? depList.length : 0;
    let depNameInput = document.querySelector('#depName').value;
    let depPhoneInput = document.querySelector('#depPhone').value;
    let depInform = {depNum: depNum, depName: depNameInput, depPhone: depPhoneInput};

    depList.push(depInform);

    alert('부서 등록 성공');

    부서출력();
}



// 부서정보 출력 함수
function 부서출력() {
    let depListTable = document.querySelector('#depList');
    let html = '';

    for (let i = 0; i < depList.length; i++) {
        html += `
                <tr>
                    <td>${depList[i].depNum}</td>
                    <td>${depList[i].depName}</td>
                    <td>${depList[i].depPhone}</td>
                    <td><button>선택</button></td>
                </tr>
                `;
    }

    depListTable.innerHTML = html;
    
    console.log('부서출력 성공');
}

