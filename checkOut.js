let check = document.querySelector('.check');

check.addEventListener('click',() => {
    toHomePage();
});

function toHomePage() {
    var homePage = "indexmain.html#home";
    window.location.href = homePage;
};