let check = document.querySelector('.check');

check.addEventListener('click',() => {
    toHomePage();
});

function toHomePage() {
    var homePage = "index.html#home";
    window.location.href = homePage;
};

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
            <img src="${info.image}" alt="">
            <div class="overlay">
            <div class="trashIcon"><i class='bx bxs-trash bx-tada   ' ></i></div>
            </div>
            </div>
            <div class="name">
            ${info.name}
            </div>
            <div class="itemPrice">
            $${info.price * item.quantity}
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