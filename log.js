let homeNav = document.querySelector('.btn');

homeNav.addEventListener('click', () => {
  let emailInput = document.querySelector('.emailInput').value;
  let passwordInput = document.querySelector('.passwordInput').value;

  if (emailInput.trim() !== '' && passwordInput.trim() !== '') {
    for (let i = 1; i <= 100; i++) {
      let storedEmail = localStorage.getItem(`email${i}`);
      let storedPassword = localStorage.getItem(`password${i}`);

      if (storedEmail && storedPassword && emailInput === storedEmail && passwordInput === storedPassword) {
        localStorage.setItem('isLoggedIn', true);
        setTimeout(toHomePage, 0); // викликати toHomePage через короткий проміжок часу
        return; // Зупинити цикл, якщо знайдено відповідність
      }
    }

    alert('Incorrect email or password. Please try again.');
  } else {
    alert('Email and password cannot be empty.');
  }
});

function toHomePage() {
  var homePage = "index.html";
  window.location.href = homePage;
};
