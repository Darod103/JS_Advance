const NEW_YEAR_MESSAGE = 'HAPPY NEW YEAR!';

function updateTimer(ms) {
    if (Math.floor(ms / 1000) <= 0) {
        return NEW_YEAR_MESSAGE;
    }

    const times = {
        month: Math.floor(Math.floor(Math.floor(Math.floor(ms / 1000 / 60) / 60) / 24) / 30.425) % 12,
        day: Math.floor(Math.floor(Math.floor(Math.floor(ms / 1000 / 60) / 60) / 24) % 30.425),
        hour: Math.floor((Math.floor(ms / 1000 / 60) / 60) % 24),
        minute: Math.floor((Math.floor(ms / 1000) / 60) % 60),
        second: Math.floor(ms / 1000) % 60,
    };

    return Object
        .entries(times)
        .reduce((array, [key, number]) => {
            if (number !== 0) {
                array.push(`${number} ${createLabel(number, key)}`);
            }
            return array;
        }, [])
        .join(', ');
}

function createLabel(number, key) {
    const labels = {
        month: {
            one: 'месяц',
            few: 'месяца',
            many: 'месяцев',
        },
        day: {
            one: 'день',
            few: 'дня',
            many: 'дней',
        },
        hour: {
            one: 'час',
            few: 'часа',
            many: 'часов',
        },
        minute: {
            one: 'минута',
            few: 'минуты',
            many: 'минут',
        },
        second: {
            one: 'секунда',
            few: 'секунды',
            many: 'секунд',
        },
    };

    const plural = new Intl.PluralRules('ru-RU', { type: 'cardinal' }).select(number);

    return labels[key][plural];
}

let diff = Date.parse('2025-01-01T00:00:00') - Date.now();
const interval = setInterval(() => {
    const message = updateTimer((diff -= 1000));
    const timerElement = document.getElementById('timer');
    timerElement.textContent = message;
    if (message === NEW_YEAR_MESSAGE) {
        clearInterval(interval);
    }
}, 1000);