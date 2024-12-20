document.getElementById('chess-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Запобігаємо відправці форми

    // Перевірка, чи всі поля заповнені
    const inputs = document.querySelectorAll('input');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value) {
            isValid = false;
        }
    });

    // Якщо всі поля заповнені, показуємо повідомлення про успіх
    if (isValid) {
        // Відображаємо повідомлення про успіх
        document.getElementById('success-message').style.display = 'block';
    } else {
        alert('Будь ласка, заповніть усі поля форми.');
    }
});
