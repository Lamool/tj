let idPw = [];

function signup() {
    let signupId = document.querySelector('#signupId').value;
    let signupPw = document.querySelector('#signupPw').value;

    idPw.push({id:signupId, pw: signupPw});

    alert('회원가입 성공');
    return;
}


function login() {
    let loginId = document.querySelector('#loginId').value;
    let loginPw = document.querySelector('#loginPw').value;
    let index = -1;

    for (let i = 0; i < idPw.length; i++) {
        if (idPw[i].id == loginId) {
            index = i;
        } 
    }

    if (index != -1) {
        if (idPw[index].pw == loginPw) {
            alert('로그인 성공');
        } else {
            alert('패스워드가 다릅니다.');
        }
    } else {
        alert('존재하지 않는 아이디입니다.');
    }

}
