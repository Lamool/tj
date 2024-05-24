let html = ``;

function carIn() {
    message('aaa');
}

function message(msg) {

    let message = document.querySelector('#message');

    html = `${ msg }`;

    message.innerHTML = html;
}