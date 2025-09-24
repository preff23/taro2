# 🚀 Tarabot Mini App - Quick Deploy Guide

## ✅ **Проект загружен в GitHub!**

**Репозиторий**: https://github.com/preff23/taro2.git

## 🚀 **Быстрый деплой на Vercel:**

### **1. Подключите GitHub к Vercel:**
```bash
# Перейдите на https://vercel.com
# Войдите через GitHub
# Нажмите "New Project"
# Выберите репозиторий: preff23/taro2
```

### **2. Настройте проект в Vercel:**
```bash
# Project Name: tarabot-mini-app
# Framework Preset: Other
# Root Directory: ./
# Build Command: (оставить пустым)
# Output Directory: (оставить пустым)
# Install Command: npm install
```

### **3. Деплойте:**
```bash
# Нажмите "Deploy"
# Дождитесь завершения деплоя
# Получите URL: https://tarabot-mini-app.vercel.app
```

## 📱 **Настройте Telegram бота:**

### **1. Создайте бота:**
```bash
# В Telegram напишите @BotFather:
/newbot
# Bot name: Tarabot
# Bot username: @your_tarabot_bot
```

### **2. Настройте Mini App:**
```bash
# В @BotFather:
/setmenubutton
# Select your bot
# Button text: 🔮 Tarabot
# URL: https://tarabot-mini-app.vercel.app/tarabot-mini-app.html
```

## 🎯 **Готовые файлы:**

### **📱 Mini App:**
- **`tarabot-mini-app.html`** - Основное приложение для Telegram
- **`index.html`** - Главная страница проекта
- **`api/`** - Vercel API функции

### **🔧 Backend:**
- **`tarabot-backend/`** - Полный NestJS бэкенд
- **`package.json`** - Зависимости проекта
- **`vercel.json`** - Конфигурация Vercel

### **📚 Документация:**
- **`README.md`** - Основная документация
- **`DEPLOY.md`** - Инструкции по деплою

## 🌐 **URLs после деплоя:**

- **Mini App**: `https://tarabot-mini-app.vercel.app/tarabot-mini-app.html`
- **Landing Page**: `https://tarabot-mini-app.vercel.app/index.html`
- **API Health**: `https://tarabot-mini-app.vercel.app/api/health`
- **Bot Link**: `https://t.me/your_tarabot_bot`

## 🎉 **Готово!**

Ваш Tarabot Mini App теперь доступен на GitHub и готов к деплою на Vercel!

**Следующие шаги:**
1. Деплойте на Vercel через веб-интерфейс
2. Создайте Telegram бота через @BotFather
3. Настройте Mini App URL в боте
4. Протестируйте в Telegram

**Время до запуска: 5-10 минут!** 🚀
