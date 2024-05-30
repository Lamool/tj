let product = [];
let order = [];

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



// 자동 주문 등록
function autoOrderAdd() {
    // 제품목록 내 랜덤으로 하나의 제품 받아오기 위해 난수 생성
    let index = parseInt(Math.random() * product.length);

    // 주문시간
    // let date = ;
    // let year = date.getFullYear();
    // let month = date.getMonth();
    // let day = date.getDay();
    // let hour = date.getHours();
    // let minute = date.getMinutes();

    let newOrder = {orderNum: order.length + 1, orderName: product[index].name, orderPrice: product[index].price, orderTime: new Date()};

    order.push(newOrder);

    autoOrderPrint();
}



// 자동 주문 출력
function autoOrderPrint() {

}
