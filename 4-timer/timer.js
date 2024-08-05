function updateTimer() {
    const now = new Date();
    const nextYear = new Date(now.getFullYear() + 1, 0, 1);
    const diff = nextYear - now;

    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24) % 30);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('months').textContent = `Месяцев: ${months}`;
    document.getElementById('days').textContent = `Дней: ${days}`;
    document.getElementById('hours').textContent = `Часов: ${hours}`;
    document.getElementById('minutes').textContent = `Минут: ${minutes}`;
    document.getElementById('seconds').textContent = `Секунд: ${seconds}`;
}

setInterval(updateTimer, 1000);
updateTimer();