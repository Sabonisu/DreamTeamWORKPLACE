//Swiper
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let menu = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  }

  window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
  }
//Cart
function toCheckOutPage() {
  var checkOutPage = "checkOut.html";
  // Виклик функції, яка переадресовує на нову сторінку
  window.location.href = checkOutPage;
}


let iconCart = document.querySelector('.btnTemp');
let blocked = document.querySelector('.shadow');
let closeCart = document.querySelector('.continueSh');
let body = document.querySelector('body');
let checkOutB = document.querySelector('.check');

iconCart.addEventListener('click', () => {
  body.classList.toggle('showCart');
});
closeCart.addEventListener('click', () => {
  body.classList.toggle('showCart');
});
blocked.addEventListener('click', () => {
  body.classList.toggle('showCart');
});
checkOutB.addEventListener('click',() =>{
  toCheckOutPage();
});
