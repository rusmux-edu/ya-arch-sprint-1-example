// Этот ключ используется для эмуляции API tasks service
const storageKey = 'ya-arch-tasks-1';
// Эта коллекция используется для эмулации API tasks service
const sampleData = [
    {
        id: 1,
        title: 'Знакомство с проектом',
        checked: false,
    },
    {
        id: 2,
        title: 'Планирование разделения на микросервисы',
        checked: false,
    },
    {
        id: 3,
        title: 'Создание проектов с использованием Module Federation',
        checked: false,
    },
    {
        id: 4,
        title: 'Перенос контролов из начального проекта',
        checked: false,
    },
    {
        id: 5,
        title: 'Пробный запуск',
        checked: false,
    },
    {
        id: 6,
        title: 'Настройка взаимодействия между компонентами',
        checked: false,
    },
    {
        id: 7,
        title: 'Запуск финального приложения',
        checked: false,
    },
    {
        id: 8,
        title: 'Завершение урока',
        checked: false,
    },
];

class Api {
    constructor() {
        this.initialize();
    }

    checkedChanged(token, id, checked) {
        // В реальном приложении здесь будет обращение к API tasks service
        const tasks = JSON.parse(localStorage.getItem(storageKey));
        localStorage.setItem(
            storageKey,
            JSON.stringify(
                tasks.map(x =>
                    x.id === id
                        ? {
                              id: x.id,
                              title: x.title,
                              checked: checked,
                          }
                        : x,
                ),
            ),
        );
    }

    getTasks(_token) {  // eslint-disable-line no-unused-vars
        // В реальном приложении здесь будет обращение к API tasks service
        return JSON.parse(localStorage.getItem(storageKey));
    }

    initialize() {
        // В реальном приложении этого метода не будет
        const items = localStorage.getItem(storageKey);
        if (!items) {
            this.reset();
        }
    }

    reset() {
        // В реальном приложении этого метода не будет
        localStorage.setItem(storageKey, JSON.stringify(sampleData));
    }
}

const api = new Api();

export default api;
