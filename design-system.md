# Дизайн-система «Таработ»

## Цветовая палитра

### Темная тема (основная)
```css
:root {
  /* Основные цвета */
  --bg-primary: #0A0B1A;        /* Глубокий индиго фон */
  --bg-secondary: #1A1B2E;      /* Вторичный фон */
  --bg-tertiary: #2A2B3E;       /* Третичный фон */
  
  /* Акцентные цвета */
  --accent-mystic: #6366F1;     /* Мистический фиолетовый */
  --accent-lunar: #8B5CF6;      /* Лунно-серебристый */
  --accent-crystal: #06B6D4;    /* Бирюзово-светлый */
  --accent-gold: #F59E0B;       /* Золотой акцент */
  
  /* Текстовые цвета */
  --text-primary: #F8FAFC;      /* Светло-серая */
  --text-secondary: #CBD5E1;    /* Кремовая */
  --text-tertiary: #94A3B8;     /* Приглушенная */
  
  /* Градиенты */
  --gradient-mystic: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
  --gradient-lunar: linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%);
  --gradient-crystal: linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%);
  
  /* Эффекты */
  --glow-mystic: 0 0 20px rgba(99, 102, 241, 0.3);
  --glow-lunar: 0 0 20px rgba(139, 92, 246, 0.3);
  --glow-crystal: 0 0 20px rgba(6, 182, 212, 0.3);
}
```

### Светлая тема
```css
:root[data-theme="light"] {
  --bg-primary: #FFFFFF;
  --bg-secondary: #F8FAFC;
  --bg-tertiary: #F1F5F9;
  
  --accent-mystic: #4F46E5;
  --accent-lunar: #7C3AED;
  --accent-crystal: #0891B2;
  --accent-gold: #D97706;
  
  --text-primary: #1E293B;
  --text-secondary: #475569;
  --text-tertiary: #64748B;
}
```

## Типографика

```css
/* Заголовки */
.heading-xl { font-size: 2.5rem; font-weight: 700; line-height: 1.2; }
.heading-lg { font-size: 2rem; font-weight: 600; line-height: 1.3; }
.heading-md { font-size: 1.5rem; font-weight: 600; line-height: 1.4; }
.heading-sm { font-size: 1.25rem; font-weight: 600; line-height: 1.4; }

/* Текст */
.text-lg { font-size: 1.125rem; font-weight: 400; line-height: 1.6; }
.text-md { font-size: 1rem; font-weight: 400; line-height: 1.5; }
.text-sm { font-size: 0.875rem; font-weight: 400; line-height: 1.5; }
.text-xs { font-size: 0.75rem; font-weight: 400; line-height: 1.4; }

/* Акцентный текст */
.text-mystic { color: var(--accent-mystic); }
.text-lunar { color: var(--accent-lunar); }
.text-crystal { color: var(--accent-crystal); }
```

## Компоненты

### Кнопки
```css
.btn-primary {
  background: var(--gradient-mystic);
  color: var(--text-primary);
  border: none;
  border-radius: 12px;
  padding: 12px 24px;
  font-weight: 600;
  box-shadow: var(--glow-mystic);
  transition: all 0.3s ease;
}

.btn-secondary {
  background: transparent;
  color: var(--accent-mystic);
  border: 2px solid var(--accent-mystic);
  border-radius: 12px;
  padding: 10px 22px;
  font-weight: 600;
}

.btn-ghost {
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  border: none;
  border-radius: 12px;
  padding: 12px 24px;
  backdrop-filter: blur(10px);
}
```

### Карточки
```css
.card {
  background: var(--bg-secondary);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.card-mystic {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  border: 1px solid var(--accent-mystic);
  box-shadow: var(--glow-mystic);
}
```

### Анимации
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

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.animate-fadeInUp { animation: fadeInUp 0.6s ease-out; }
.animate-pulse { animation: pulse 2s infinite; }
.animate-shimmer {
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}
```

## Telegram WebApp интеграция

```javascript
// Инициализация темы
const initTheme = () => {
  const theme = Telegram.WebApp.colorScheme;
  document.documentElement.setAttribute('data-theme', theme);
  
  // Установка цветов заголовка
  Telegram.WebApp.setHeaderColor(theme === 'dark' ? '#0A0B1A' : '#FFFFFF');
  Telegram.WebApp.setBackgroundColor(theme === 'dark' ? '#0A0B1A' : '#FFFFFF');
};

// Обработка изменения темы
Telegram.WebApp.onEvent('themeChanged', initTheme);
Telegram.WebApp.ready();
initTheme();
```
