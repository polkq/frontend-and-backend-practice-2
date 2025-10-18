// ===== ОСНОВНЫЕ ФУНКЦИИ =====

// Переключатель темы
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    
    if (body.classList.contains('bg-light')) {
        // Переключаем на темную тему
        body.classList.remove('bg-light');
        body.classList.add('bg-dark');
        
        // Обновляем карточки
        document.querySelectorAll('.card').forEach(card => {
            card.classList.remove('bg-white');
            card.classList.add('bg-dark');
        });
        
        // Обновляем заголовки карточек
        document.querySelectorAll('.card-header').forEach(header => {
            header.classList.remove('bg-light');
            header.classList.add('bg-secondary');
        });
        
        // Обновляем иконку
        themeIcon.className = 'bi bi-sun';
        
        // Сохраняем выбор
        localStorage.setItem('theme', 'dark');
    } else {
        // Переключаем на светлую тему
        body.classList.remove('bg-dark');
        body.classList.add('bg-light');
        
        // Обновляем карточки
        document.querySelectorAll('.card').forEach(card => {
            card.classList.remove('bg-dark');
            card.classList.add('bg-white');
        });
        
        // Обновляем заголовки карточек
        document.querySelectorAll('.card-header').forEach(header => {
            header.classList.remove('bg-secondary');
            header.classList.add('bg-light');
        });
        
        // Обновляем иконку
        themeIcon.className = 'bi bi-moon';
        
        // Сохраняем выбор
        localStorage.setItem('theme', 'light');
    }
}

// Загружаем сохраненную тему при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    if (savedTheme === 'dark') {
        toggleTheme(); // Применяем темную тему
    }
});

// ===== ФУНКЦИИ ДЛЯ СТРАНИЦЫ ПРОЕКТОВ =====

// Данные проектов
const projectsData = {
    1: {
        title: 'Личный сайт',
        description: 'Сайт-портфолио на HTML, CSS и Bootstrap с адаптивным дизайном. Включает темную тему, интерактивные элементы и модальные окна.',
        technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
        date: 'Декабрь 2024',
        status: 'Завершен',
        link: 'https://example.com/personal-site',
        code: 'https://github.com/username/personal-site',
        features: [
            'Адаптивный дизайн',
            'Темная/светлая тема',
            'Интерактивные элементы',
            'Модальные окна',
            'Анимации и переходы'
        ]
    },
    2: {
        title: 'Todo-приложение',
        description: 'Приложение для управления задачами с использованием JavaScript. Включает добавление, редактирование, удаление и фильтрацию задач.',
        technologies: ['JavaScript', 'LocalStorage', 'HTML', 'CSS'],
        date: 'Ноябрь 2024',
        status: 'Завершен',
        link: 'https://example.com/todo-app',
        code: 'https://github.com/username/todo-app',
        features: [
            'Добавление задач',
            'Редактирование задач',
            'Удаление задач',
            'Фильтрация по статусу',
            'Сохранение в LocalStorage'
        ]
    },
    3: {
        title: 'Интернет-магазин',
        description: 'Прототип интернет-магазина с корзиной товаров, фильтрацией и поиском. Использует React и внешние API для получения данных о товарах.',
        technologies: ['React', 'API', 'JavaScript', 'CSS'],
        date: 'Октябрь 2024',
        status: 'В разработке',
        link: 'https://example.com/shop',
        code: 'https://github.com/username/shop',
        features: [
            'Каталог товаров',
            'Корзина покупок',
            'Фильтрация товаров',
            'Поиск по названию',
            'Интеграция с API'
        ]
    },
    4: {
        title: 'Игра "Змейка"',
        description: 'Классическая игра "Змейка" на JavaScript с Canvas API. Включает систему очков, уровни сложности и сохранение рекордов.',
        technologies: ['JavaScript', 'Canvas', 'HTML', 'CSS'],
        date: 'Сентябрь 2024',
        status: 'Завершен',
        link: 'https://example.com/snake-game',
        code: 'https://github.com/username/snake-game',
        features: [
            'Игровая логика',
            'Canvas отрисовка',
            'Система очков',
            'Уровни сложности',
            'Сохранение рекордов'
        ]
    },
    5: {
        title: 'Погодное приложение',
        description: 'Приложение для просмотра погоды с использованием внешнего API. Показывает текущую погоду и прогноз на несколько дней.',
        technologies: ['API', 'JavaScript', 'HTML', 'CSS'],
        date: 'Август 2024',
        status: 'Завершен',
        link: 'https://example.com/weather-app',
        code: 'https://github.com/username/weather-app',
        features: [
            'Текущая погода',
            'Прогноз на неделю',
            'Поиск по городу',
            'Геолокация',
            'Адаптивный дизайн'
        ]
    },
    6: {
        title: 'Калькулятор',
        description: 'Функциональный калькулятор на JavaScript с поддержкой основных математических операций. Включает историю вычислений и клавиатурный ввод.',
        technologies: ['JavaScript', 'HTML', 'CSS'],
        date: 'Июль 2024',
        status: 'Завершен',
        link: 'https://example.com/calculator',
        code: 'https://github.com/username/calculator',
        features: [
            'Базовые операции',
            'История вычислений',
            'Клавиатурный ввод',
            'Научные функции',
            'Адаптивный дизайн'
        ]
    }
};

// Обработчик клика на карточку проекта
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card[data-project]');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const project = projectsData[projectId];
            
            if (project) {
                showProjectModal(project);
            }
        });
    });
});

// Показать модальное окно проекта
function showProjectModal(project) {
    const modalTitle = document.getElementById('projectModalLabel');
    const modalBody = document.getElementById('projectModalBody');
    const modalLink = document.getElementById('projectModalLink');
    const modalCode = document.getElementById('projectModalCode');
    
    modalTitle.textContent = project.title;
    
    modalBody.innerHTML = `
        <div class="row">
            <div class="col-md-8">
                <h6>Описание</h6>
                <p>${project.description}</p>
                
                <h6 class="mt-3">Основные функции</h6>
                <ul>
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            <div class="col-md-4">
                <h6>Технологии</h6>
                <div class="mb-3">
                    ${project.technologies.map(tech => `<span class="badge bg-primary me-1 mb-1">${tech}</span>`).join('')}
                </div>
                
                <h6>Дата создания</h6>
                <p class="text-muted">${project.date}</p>
                
                <h6>Статус</h6>
                <span class="badge ${project.status === 'Завершен' ? 'bg-success' : 'bg-warning'}">${project.status}</span>
            </div>
        </div>
    `;
    
    modalLink.href = project.link;
    modalCode.href = project.code;
}

// ===== ФИЛЬТРАЦИЯ ПРОЕКТОВ =====

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('[data-category]');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Убираем активный класс со всех кнопок
                filterButtons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.classList.remove('btn-primary');
                    btn.classList.add('btn-outline-primary');
                });
                
                // Добавляем активный класс к нажатой кнопке
                this.classList.add('active');
                this.classList.remove('btn-outline-primary');
                this.classList.add('btn-primary');
                
                const filter = this.getAttribute('data-filter');
                
                projectCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block';
                        card.classList.add('fade-in');
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
});

// ===== ФОРМА КОНТАКТОВ =====

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                // Показываем модальное окно успеха
                const successModal = new bootstrap.Modal(document.getElementById('successModal'));
                successModal.show();
                
                // Очищаем форму
                contactForm.reset();
                
                // Убираем классы валидации
                const inputs = contactForm.querySelectorAll('.form-control, .form-check-input');
                inputs.forEach(input => {
                    input.classList.remove('is-valid', 'is-invalid');
                });
            }
        });
    }
});

// Валидация формы
function validateForm() {
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.type === 'checkbox') {
            if (!input.checked) {
                input.classList.add('is-invalid');
                isValid = false;
            } else {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
            }
        } else if (input.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                input.classList.add('is-invalid');
                isValid = false;
            } else {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
            }
        } else {
            if (input.value.trim() === '') {
                input.classList.add('is-invalid');
                isValid = false;
            } else {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
            }
        }
    });
    
    return isValid;
}

// ===== ФОРМА ДНЕВНИКА =====

document.addEventListener('DOMContentLoaded', function() {
    const diaryForm = document.getElementById('diaryForm');
    
    if (diaryForm) {
        diaryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const date = document.getElementById('entryDate').value;
            const status = document.getElementById('entryStatus').value;
            const title = document.getElementById('entryTitle').value;
            const description = document.getElementById('entryDescription').value;
            
            if (date && status && title) {
                addDiaryEntry(date, status, title, description);
                diaryForm.reset();
                
                // Показываем уведомление
                showNotification('Запись добавлена в дневник!', 'success');
            }
        });
    }
});

// Добавить запись в дневник
function addDiaryEntry(date, status, title, description) {
    const timeline = document.querySelector('.timeline');
    const newEntry = document.createElement('div');
    newEntry.className = 'timeline-item';
    
    const statusClass = status === 'completed' ? 'bg-success' : 
                       status === 'in-progress' ? 'bg-warning' : 'bg-info';
    const statusText = status === 'completed' ? 'Завершено' : 
                      status === 'in-progress' ? 'В процессе' : 'Планируется';
    const statusIcon = status === 'completed' ? 'bi-check' : 
                      status === 'in-progress' ? 'bi-clock' : 'bi-calendar';
    
    newEntry.innerHTML = `
        <div class="timeline-marker ${statusClass}">
            <i class="bi ${statusIcon} text-white"></i>
        </div>
        <div class="timeline-content">
            <div class="d-flex justify-content-between align-items-start">
                <div>
                    <h6 class="mb-1">${title}</h6>
                    <p class="text-muted mb-1">${description}</p>
                    <small class="text-muted">${formatDate(date)}</small>
                </div>
                <span class="badge ${statusClass}">${statusText}</span>
            </div>
        </div>
    `;
    
    timeline.insertBefore(newEntry, timeline.firstChild);
}

// Форматирование даты
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

// ===== УВЕДОМЛЕНИЯ =====

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 1060; min-width: 300px;';
    
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Автоматически скрываем через 5 секунд
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// ===== АНИМАЦИИ ПРИ ПРОКРУТКЕ =====

document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Наблюдаем за карточками
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        observer.observe(card);
    });
});

// ===== ОБРАБОТЧИКИ СОБЫТИЙ =====

// Добавляем анимации при наведении
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Обработка клавиатуры для форм
document.addEventListener('keydown', function(e) {
    // ESC закрывает модальные окна
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal.show');
        modals.forEach(modal => {
            const modalInstance = bootstrap.Modal.getInstance(modal);
            if (modalInstance) {
                modalInstance.hide();
            }
        });
    }
});

// ===== УТИЛИТЫ =====

// Функция для копирования текста в буфер обмена
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Скопировано в буфер обмена!', 'success');
    }).catch(() => {
        showNotification('Ошибка копирования', 'danger');
    });
}

// Функция для форматирования номера телефона
function formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length > 0) {
        if (value[0] === '7') {
            value = value.substring(1);
        }
        if (value.length > 0) {
            value = '+7 (' + value.substring(0, 3) + ') ' + value.substring(3, 6) + '-' + value.substring(6, 8) + '-' + value.substring(8, 10);
        }
    }
    input.value = value;
}

// Применяем форматирование к полям телефона
document.addEventListener('DOMContentLoaded', function() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function() {
            formatPhoneNumber(this);
        });
    });
});
