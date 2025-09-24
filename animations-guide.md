# Анимации и микровзаимодействия «Таработ»

## Общие принципы анимации

### Временные характеристики
- **Продолжительность**: 0.3-0.6 секунды для большинства переходов
- **Кривая анимации**: `ease-out` для появления, `ease-in-out` для сложных переходов
- **Задержки**: 0.1-0.2 секунды между элементами для создания волнового эффекта

### Производительность
- Использование `transform` и `opacity` для оптимальной производительности
- Избегание анимации `width`, `height`, `margin`, `padding`
- Применение `will-change` для элементов с анимацией

## Основные анимации

### 1. Появление элементов (fadeInUp)
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fadeInUp {
    animation: fadeInUp 0.6s ease-out;
}
```

**Применение**: Появление карточек, секций, модальных окон

### 2. Пульсация (pulse)
```css
@keyframes pulse {
    0%, 100% { 
        transform: scale(1); 
        opacity: 0.3; 
    }
    50% { 
        transform: scale(1.05); 
        opacity: 0.6; 
    }
}

.animate-pulse {
    animation: pulse 2s infinite;
}
```

**Применение**: Логотип на splash-экране, активные элементы

### 3. Перелистывание карт (cardFlip)
```css
@keyframes cardFlip {
    0% { transform: rotateY(0deg); }
    50% { transform: rotateY(90deg); }
    100% { transform: rotateY(0deg); }
}

.animate-cardFlip {
    animation: cardFlip 0.8s ease-in-out;
}
```

**Применение**: Переворот карт Таро при клике

### 4. Волновой эффект (wave)
```css
@keyframes wave {
    0%, 100% { height: 8px; }
    50% { height: 20px; }
}

.voice-wave {
    animation: wave 1s ease-in-out infinite;
}
```

**Применение**: Индикатор записи голоса

### 5. Блеск (shimmer)
```css
@keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.animate-shimmer {
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    background-size: 200% 100%;
    animation: shimmer 2s infinite;
}
```

**Применение**: Эффект загрузки, премиум элементы

## Микровзаимодействия

### 1. Hover эффекты
```css
.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
}
```

### 2. Активные состояния
```css
.nav-item.active {
    color: var(--accent-mystic);
    background: rgba(99, 102, 241, 0.1);
}

.plan-card.recommended {
    border-color: var(--accent-gold);
    box-shadow: var(--glow-gold);
}
```

### 3. Состояния загрузки
```css
.loading-progress {
    animation: loading 3s ease-in-out infinite;
}

@keyframes loading {
    0% { width: 0%; }
    50% { width: 70%; }
    100% { width: 100%; }
}
```

### 4. Состояния ошибок
```css
.form-input.error {
    border-color: var(--accent-red);
    animation: shake 0.5s ease-in-out;
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
}
```

## Специальные эффекты

### 1. Параллакс звезд
```css
.star {
    animation: twinkle 3s infinite;
}

@keyframes twinkle {
    0%, 100% { 
        opacity: 0.3; 
        transform: scale(1); 
    }
    50% { 
        opacity: 1; 
        transform: scale(1.2); 
    }
}
```

### 2. Плавающие частицы
```css
.particle {
    animation: float 6s infinite linear;
}

@keyframes float {
    0% {
        transform: translateY(100vh) scale(0);
        opacity: 0;
    }
    10% {
        opacity: 0.6;
    }
    90% {
        opacity: 0.6;
    }
    100% {
        transform: translateY(-100px) scale(1);
        opacity: 0;
    }
}
```

### 3. Эффект тумана
```css
.background {
    animation: mist 8s ease-in-out infinite;
}

@keyframes mist {
    0%, 100% { 
        opacity: 0.3; 
        transform: scale(1); 
    }
    50% { 
        opacity: 0.6; 
        transform: scale(1.1); 
    }
}
```

### 4. Резонансный эффект
```css
.power-card {
    animation: resonance 0.5s ease-out;
}

@keyframes resonance {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); box-shadow: 0 0 30px var(--accent-gold); }
    100% { transform: scale(1); }
}
```

## Переходы между экранами

### 1. Slide переходы
```css
.screen-slide-in {
    animation: slideIn 0.4s ease-out;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
```

### 2. Fade переходы
```css
.screen-fade {
    animation: fade 0.3s ease-in-out;
}

@keyframes fade {
    from { opacity: 0; }
    to { opacity: 1; }
}
```

### 3. Scale переходы для модальных окон
```css
.modal-appear {
    animation: modalAppear 0.3s ease-out;
}

@keyframes modalAppear {
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
```

## Адаптивные анимации

### Уменьшение анимаций на слабых устройствах
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

### Оптимизация для мобильных устройств
```css
@media (max-width: 768px) {
    .animate-fadeInUp {
        animation-duration: 0.4s;
    }
    
    .card:hover {
        transform: none;
    }
}
```

## JavaScript анимации

### Программное управление анимациями
```javascript
// Плавное появление элементов при скролле
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
        }
    });
}, observerOptions);

// Применение к элементам
document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});
```

### Анимация прогресса
```javascript
const animateProgress = (element, targetValue, duration = 1000) => {
    const startValue = 0;
    const startTime = performance.now();
    
    const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const currentValue = startValue + (targetValue - startValue) * progress;
        element.style.width = `${currentValue}%`;
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    };
    
    requestAnimationFrame(animate);
};
```

### Управление анимациями через классы
```javascript
// Добавление анимации
const addAnimation = (element, animationClass) => {
    element.classList.add(animationClass);
    
    // Удаление класса после завершения анимации
    element.addEventListener('animationend', () => {
        element.classList.remove(animationClass);
    }, { once: true });
};

// Использование
addAnimation(document.querySelector('.card'), 'animate-cardFlip');
```

## Оптимизация производительности

### 1. Использование transform3d для аппаратного ускорения
```css
.animated-element {
    transform: translate3d(0, 0, 0);
    will-change: transform;
}
```

### 2. Отключение анимаций для неактивных вкладок
```javascript
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.body.classList.add('animations-paused');
    } else {
        document.body.classList.remove('animations-paused');
    }
});

.animations-paused * {
    animation-play-state: paused !important;
}
```

### 3. Ленивая загрузка анимаций
```javascript
const lazyAnimate = (element, animationClass) => {
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isVisible) {
        element.classList.add(animationClass);
    }
};
```

## Интеграция с Telegram WebApp

### Обработка изменений темы
```javascript
Telegram.WebApp.onEvent('themeChanged', () => {
    const theme = Telegram.WebApp.colorScheme;
    
    // Плавный переход между темами
    document.body.style.transition = 'background-color 0.3s ease';
    document.documentElement.setAttribute('data-theme', theme);
    
    setTimeout(() => {
        document.body.style.transition = '';
    }, 300);
});
```

### Анимация при открытии/закрытии
```javascript
// При открытии WebApp
Telegram.WebApp.ready(() => {
    document.body.classList.add('app-loaded');
});

// При закрытии
Telegram.WebApp.onEvent('viewportChanged', () => {
    if (Telegram.WebApp.viewportHeight < 100) {
        document.body.classList.add('app-closing');
    }
});
```

## Чек-лист анимаций

### ✅ Обязательные анимации
- [ ] Появление элементов при загрузке
- [ ] Hover эффекты для интерактивных элементов
- [ ] Переходы между экранами
- [ ] Анимация загрузки
- [ ] Обратная связь при клике

### ✅ Дополнительные анимации
- [ ] Параллакс эффекты
- [ ] Микроанимации для улучшения UX
- [ ] Анимация карт Таро
- [ ] Эффекты свечения для премиум элементов
- [ ] Плавающие частицы и звезды

### ✅ Оптимизация
- [ ] Использование CSS transform и opacity
- [ ] Отключение анимаций при prefers-reduced-motion
- [ ] Оптимизация для мобильных устройств
- [ ] Ленивая загрузка анимаций
- [ ] Управление производительностью
