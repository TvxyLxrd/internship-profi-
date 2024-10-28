document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        window.location.href = 'admin.html';
    } else if (username === 'manager' && password === 'manager') {
        window.location.href = 'manager.html';
    } else {
        alert('Неверное имя пользователя или пароль');
    }
});

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Заявка отправлена!');
    // Здесь можно добавить код для отправки данных на сервер
});
