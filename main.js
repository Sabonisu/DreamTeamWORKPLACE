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



//память кошика
let listCartHTML = document.querySelector('.listCart');
let iconCartSpan = document.querySelector('.icon-cart span');
let cart = [];

let totalCostSpan = document.querySelector('.num'); // Доданий елемент для відображення загальної вартості
const calculateTotalCost = () => {
    let totalCost = 0;
    cart.forEach(item => {
      let positionProduct = products.findIndex((value) => value.id == item.product_id);
      let info = products[positionProduct];
      totalCost += info.price * item.quantity;
    });
    if (totalCostSpan) {
      totalCostSpan.innerText = `$${totalCost.toFixed(2)}`;
    }
    console.log(`Total cost: $${totalCost.toFixed(2)}`);
  }
  

listCartHTML.addEventListener('click', (event) => {
  let positionClick = event.target;
  if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
      let product_id = positionClick.parentElement.parentElement.dataset.id;
      let type = 'minus';
      if(positionClick.classList.contains('plus')){
          type = 'plus';
      }
      changeQuantityCart(product_id, type);
  }
})

const addToCart = (product_id) => {
  let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
  if(cart.length <= 0){
      cart = [{
          product_id: product_id,
          quantity: 1
      }];
  }else if(positionThisProductInCart < 0){
      cart.push({
          product_id: product_id,
          quantity: 1
      });
  }else{
      cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + 1;
  }
  addCartToHTML();
  addCartToMemory();
}
const addCartToMemory = () => {
  localStorage.setItem('cart', JSON.stringify(cart));
}
const addCartToHTML = () => {
  listCartHTML.innerHTML = '';
  let totalQuantity = 0;
  if(cart.length > 0){
      cart.forEach(item => {
          totalQuantity = totalQuantity +  item.quantity;
          let newItem = document.createElement('div');
          newItem.classList.add('item');
          newItem.dataset.id = item.product_id;

          let positionProduct = products.findIndex((value) => value.id == item.product_id);
          let info = products[positionProduct];
          listCartHTML.appendChild(newItem);
          newItem.innerHTML = `
          <div class="image">
              <img src="${info.image}">
              </div>
              <div class="name">
              ${info.name}
              </div>
              <div class="totalPrice">$${info.price * item.quantity}</div>
              <div class="quantity">
              <span class="minus"><</span>
              <span>${item.quantity}</span>
              <span class="plus">></span>
              </div>
          `;
      })
  }
  if(iconCartSpan) {
    iconCartSpan.innerText = totalQuantity;
  }
  calculateTotalCost();
}
const changeQuantityCart = (product_id, type) => {
  let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
  if(positionItemInCart >= 0){
      let info = cart[positionItemInCart];
      switch (type) {
          case 'plus':
              cart[positionItemInCart].quantity = cart[positionItemInCart].quantity + 1;
              break;
      
          default:
              let changeQuantity = cart[positionItemInCart].quantity - 1;
              if (changeQuantity > 0) {
                  cart[positionItemInCart].quantity = changeQuantity;
              }else{
                  cart.splice(positionItemInCart, 1);
              }
              break;
      }
  }
  addCartToHTML();
  addCartToMemory();
}

const initApp = () => {
  // get data product
  fetch('products.json')
  .then(response => response.json())
  .then(data => {
      products = data;
      // get data cart from memory
      if(localStorage.getItem('cart')){
          cart = JSON.parse(localStorage.getItem('cart'));
          addCartToHTML();
      }
  })
}
initApp();