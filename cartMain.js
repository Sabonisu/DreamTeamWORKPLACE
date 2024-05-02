//Cart
function toCheckOutPage() {
    var checkOutPage = "checkOut.html";
    // Виклик функції, яка переадресовує на нову сторінку
    window.location.href = checkOutPage;
}


let blocked = document.querySelector('.shadow');
let closeCart = document.querySelector('.continueSh');
let body = document.querySelector('body');
let checkOutB = document.querySelector('.check');
let openCartIcon = document.querySelectorAll('.openCart');

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});
blocked.addEventListener('click', () => {
    body.classList.toggle('showCart');
});
checkOutB.addEventListener('click', () => {
    toCheckOutPage();
});
checkOutB.addEventListener('click', () => {
    body.classList.toggle('showCart');
});
openCartIcon.forEach(function(icon) {
    icon.addEventListener('click', () => {
        document.body.classList.toggle('showCart');
    });
});
