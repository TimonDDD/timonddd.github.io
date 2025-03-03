document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Simple authentication logic (for demonstration purposes)
    if (username === 'admin' && password === 'password') {
        alert('Успешный вход');
        window.location.href = 'main.html';
    } else {
        alert('Неверный логин или пароль');
    }
});

document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Simple registration logic (for demonstration purposes)
    alert('Регистрация успешна');
    window.location.href = 'index.html';
});
