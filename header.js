let homeNav = document.querySelector('.homeNav');
let categoriesNav = document.querySelector('.categoriesNav');
let productsNav = document.querySelector('.productsNav');
let aboutNav = document.querySelector('.aboutNav');
let customersNav = document.querySelector('.customersNav');
let login_button = document.querySelector('.profile1');

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

customersNav.addEventListener('click', () => {
    toLogIn();
});

function toHomePage() {
    var homePage = "indexmain.html#home";
    window.location.href = homePage;
};

function toCategoriesPage() {
    var categoriesPage = "indexmain.html#categories";
    window.location.href = categoriesPage;
}

function toProductsPage() {
    var productsPage = "indexmain.html#products";
    window.location.href = productsPage;
}

function toAboutPage() {
    var aboutPage = "indexmain.html#about";
    window.location.href = aboutPage;
}

function toCustomersPage() {
    var customersPage = "indexmain.html#customers";
    window.location.href = customersPage;
}

function toLogIn() {
    var customersPage = "login.html";
    window.location.href = customersPage;
}
