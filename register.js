document.getElementById('signinBtn').addEventListener('click', async () => {
    let emailInput = document.querySelector('.emailInput');
    let passwordInput = document.querySelector('.passwordInput');

    const email = emailInput.value;
    const password = passwordInput.value;

    // Перевірка, чи поля не порожні
    if (!email || !password) {
        alert('Please fill in both email and password fields.');
        return; // Зупинити виконання, якщо поля порожні
    }

    // Отримуємо поточний номер екземпляра
    let instanceNumber = localStorage.getItem('instanceNumber') || 0;
    instanceNumber = parseInt(instanceNumber) + 1;

    // Зберігання даних у .json файлі з пронумерованими екземплярами
    await saveDataToJson(email, password, instanceNumber);

    // Зберігання пронумерованого email та password в локальному сховищі
    localStorage.setItem(`email${instanceNumber}`, email);
    localStorage.setItem(`password${instanceNumber}`, password);
    // Зберігаємо стан входу
    localStorage.setItem('isLoggedIn', true);
    // Зберігаємо номер останнього екземпляра
    localStorage.setItem('instanceNumber', instanceNumber);
    
    // Навігація на домашню сторінку
    toHomePage();
});

async function saveDataToJson(email, password, instanceNumber) {
    const data = { email, password, instanceNumber };
    try {
        const response = await fetch('/save-log', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const json = await response.json();
        console.log(json.message); // Повідомлення з сервера про успішне збереження
    } catch (error) {
        console.error('Error:', error);
    }
}

function toHomePage() {
    var homePage = "index.html";
    window.location.href = homePage;
};
