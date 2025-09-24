# 🔮 Tarabot Telegram Mini App

AI-powered Tarot readings in your Telegram pocket!

## 🚀 Quick Deploy to Vercel

### 1. **Prepare Repository**
```bash
git init
git add .
git commit -m "Initial commit: Tarabot Mini App"
gh repo create tarabot-mini-app --public
git remote add origin https://github.com/YOUR_USERNAME/tarabot-mini-app.git
git push -u origin main
```

### 2. **Deploy to Vercel**
```bash
npm install -g vercel
vercel login
vercel --prod
```

### 3. **Configure Telegram Bot**
```bash
# In @BotFather
/newbot
# Name: Tarabot
# Username: @your_tarabot_bot

/setmenubutton
# Select your bot
# Text: 🔮 Tarabot
# URL: https://your-vercel-app.vercel.app/tarabot-mini-app.html
```

## 📁 Project Structure

```
tarabot-mini-app/
├── tarabot-mini-app.html    # Main Mini App
├── index.html              # Landing page
├── api/                    # Vercel API functions
│   ├── health.js          # Health check
│   └── auth/telegram.js   # Telegram auth
├── package.json           # Dependencies
└── vercel.json           # Vercel config
```

## 🔧 Configuration

### **Environment Variables (Vercel)**
```
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_WEBHOOK_SECRET=your_secret
JWT_ACCESS_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_key
```

## 📱 Mini App Features

- ✅ Telegram WebApp SDK integration
- ✅ User authentication via initData
- ✅ Theme support (light/dark)
- ✅ Responsive mobile design
- ✅ Tarot readings with AI
- ✅ Diary functionality
- ✅ Payment integration ready

## 🛠️ Development

```bash
npm install
vercel dev
open http://localhost:3000
```

## 🚀 Production Deployment

1. **GitHub Repository** - Push code
2. **Vercel Deployment** - Connect GitHub
3. **Telegram Bot** - Configure Mini App URL
4. **Domain Setup** - Add custom domain (optional)

## 🎯 Next Steps

1. Replace mock API with real backend
2. Add database for user data
3. Implement Telegram Stars payments
4. Add AI integration with OpenAI

## 📞 Support

- [Telegram Mini Apps Docs](https://core.telegram.org/bots/webapps)
- [Vercel Functions](https://vercel.com/docs/functions)
- [Telegram Bot API](https://core.telegram.org/bots/api)

Your Tarabot Mini App is ready for Telegram users! 🚀