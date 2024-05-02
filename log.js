// let emailInput = document.querySelector('.emailInput');
// let passwordInput = document.querySelector('.passwordInput');
let homeNav = document.querySelector('.btn');


    // Якщо значення не встановлене, встановлюємо його в false


// emailInput.addEventListener('input', toggleButton);
// passwordInput.addEventListener('input', toggleButton);

// function toggleButton() {
//     const email = emailInput.value;
//     const password = passwordInput.value;

//     if (email.trim() !== '' && password.trim() !== '') {
//         loginBtn.removeAttribute('disabled');
//     } else {
//         loginBtn.setAttribute('disabled', true);
//     }
// }

homeNav.addEventListener('click', () => {
    localStorage.setItem('isLoggedIn', true);
    // const email = emailInput.value.trim();
    // const password = passwordInput.value.trim();

    // if (email !== '' && password !== '') {
        toHomePage();
    // }
});



function toHomePage() {
    var homePage = "index.html";
    window.location.href = homePage;
};

// disabled="True"