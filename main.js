document.addEventListener("DOMContentLoaded", function() {
  // Отримуємо посилання на елемент хедера
  var header = document.querySelector('header');

  // Перевіряємо, чи користувач увійшов, зчитуючи дані з localStorage
  var isLoggedIn = localStorage.getItem('isLoggedIn');

  // Перевіряємо, чи користувач увійшов
  if (isLoggedIn === 'true') {
      // Додаємо клас "logged_in" до хедера
      header.classList.add('logged_in');
  }
});

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

//лінк на продукти
  let productsPage = document.querySelector('.customersNav');
  function toProducts() {
    var prodPage = "product_page.html";
    window.location.href = prodPage;
};

//Лог аут
let logOutBtn = document.querySelector('.logOutBtn');
logOutBtn.addEventListener('click', () => {
    localStorage.setItem('isLoggedIn', false);
    location.reload();

});
