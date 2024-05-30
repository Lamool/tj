let product = [];
let order = [
    {orderNum: 1, orderName: '코카콜라', orderPrice: '1000', orderTime: '2024-05-30 17:00'},
    {orderNum: 2, orderName: '사이다', orderPrice: '1500', orderTime: '2024-05-30 17:37'},
    {orderNum: 3, orderName: '환타', orderPrice: '2000', orderTime: '2024-05-30 17:52'},
];
let timerId;

print();

// 제품 등록 함수
function add() {
    let nameInput = document.querySelector('#name').value;
    let priceInput = document.querySelector('#price').value;
    let newProduct = {name: nameInput, price: priceInput};

    // 1. localstorage에 있는 product 가져오기
    let localProduct = JSON.parse(localStorage.getItem('localProduct'));
    console.log(localProduct);

    // 2. 가져온 product(localstorage) 없으면 빈배열 대입, 존재하면 js 배열에 대입
    if (localProduct == null) {
        product = [];
    } else {
        product = localProduct;
    }

    // 3.
    product.push(newProduct);

    // 4. 다시 localstorage에 product를 저장하기
    localStorage.setItem('localProduct', JSON.stringify(product));

    alert('제품 등록 성공');

    // input 값 초기화
    document.querySelector('#name').value = null;
    document.querySelector('#price').value = null;
}



// 등록된 제품 불러오는 함수
function print() {
    let localProduct = JSON.parse(localStorage.getItem('localProduct'));
    if (localProduct == null) {
        product = [];
    } else {
        product = localProduct;
    }
}



// 3초마다 자동 주문 함수 호출
function timer() {
    timerId = setInterval(autoOrderAdd, 3000);
}



// 자동 주문 등록
function autoOrderAdd() {
    // 제품목록 내 랜덤으로 하나의 제품 받아오기 위해 난수 생성
    let index = parseInt(Math.random() * product.length);

    // 주문시간
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let date2 = `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day} ${hour < 10 ? "0" + hour : hour}:${minute < 10 ? "0" + minute : minute}`;

    // 주문 객체로 저장
    let newOrder = {orderNum: order.length + 1, orderName: product[index].name, orderPrice: product[index].price, orderTime: date2};

    order.push(newOrder);

    console.log('autoOrderAdd 호출 완료');

    autoOrderPrint();
}



// 자동 주문 출력
function autoOrderPrint() {
    let tBody = document.querySelector('#tBody');
    let html = '';

    for (let i = 0; i < order.length; i++) {
        html += `
                <tr>
                    <th scope="row">${order[i].orderNum}</th>
                    <td>${order[i].orderName}</td>
                    <td>${order[i].orderPrice}</td>
                    <td>${order[i].orderTime}</td>
                </tr>
                `;
    }

    tBody.innerHTML = html;

    console.log('autoOrderPrint 호출 완료');
}
