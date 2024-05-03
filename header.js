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

let homeNav = document.querySelector('.homeNav');
let categoriesNav = document.querySelector('.categoriesNav');
let productsNav = document.querySelector('.productsNav');
let aboutNav = document.querySelector('.aboutNav');
let customersNav = document.querySelector('.customersNav');


const navLinks = document.querySelectorAll('.navbar li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Забираємо атрибут 'id' у всіх пунктів меню
        navLinks.forEach(navLink => {
            navLink.removeAttribute('id');
        });
        // Встановлюємо атрибут 'id' поточному пункту меню
        link.setAttribute('id', 'navActive');
    });
});



homeNav.addEventListener('click', () => {
    toHomePage();
});

categoriesNav.addEventListener('click', () => {
    toCategoriesPage();
});

productsNav.addEventListener('click', () => {
    toProductsPage();
});

aboutNav.addEventListener('click', () => {
    toAboutPage();
});

customersNav.addEventListener('click', () => {
    toCustomersPage();
});

function toHomePage() {
    var homePage = "index.html#home";
    window.location.href = homePage;
};

function toCategoriesPage() {
    var categoriesPage = "index.html#categories";
    window.location.href = categoriesPage;
}

function toProductsPage() {
    var productsPage = "index.html#products";
    window.location.href = productsPage;
}

function toAboutPage() {
    var aboutPage = "index.html#about";
    window.location.href = aboutPage;
}

function toCustomersPage() {
    var customersPage = "index.html#customers";
    window.location.href = customersPage;
}

function toLogIn() {
    var customersPage = "login.html";
    window.location.href = customersPage;
}


let profile2 = document.querySelector('.profile2');
profile2.addEventListener('click', () => {
    profile2.classList.toggle('show');
});

let profCartBtn = document.querySelector('.profCart');
profCartBtn.addEventListener('click', () =>{
    body.classList.toggle('showCart');
})