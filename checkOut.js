let check = document.querySelector('.check');

check.addEventListener('click',() => {
    toHomePage();
});

function toHomePage() {
    var homePage = "index.html#home";
    window.location.href = homePage;
};