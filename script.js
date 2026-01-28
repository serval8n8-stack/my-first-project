// МамаЭксперт — Основные скрипты

document.addEventListener('DOMContentLoaded', () => {
    initAgeFilters();
    initSubscribeForm();
});

/**
 * Инициализация фильтрации статей по возрасту
 */
function initAgeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const articles = document.querySelectorAll('.article-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Убираем active у всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Добавляем active к нажатой кнопке
            button.classList.add('active');

            const selectedAge = button.dataset.age;

            articles.forEach(article => {
                if (selectedAge === 'all' || article.dataset.age === selectedAge) {
                    article.style.display = 'block';
                } else {
                    article.style.display = 'none';
                }
            });
        });
    });
}

/**
 * Инициализация формы подписки
 */
function initSubscribeForm() {
    const form = document.querySelector('.subscribe-form');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = e.target.querySelector('input[type="email"]');
        const email = emailInput.value;

        // Здесь можно добавить интеграцию с сервисом рассылки
        // Например: sendToMailchimp(email) или sendToSendPulse(email)

        alert('Спасибо за подписку! Мы будем отправлять полезные материалы на ' + email);
        e.target.reset();
    });
}
