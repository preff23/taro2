# 🚀 Tarabot Mini App - Deploy Instructions

## 📋 Step-by-Step Deployment Guide

### **Step 1: Prepare GitHub Repository**

```bash
# Navigate to project directory
cd /Users/goretofff/Desktop/taro2

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Tarabot Telegram Mini App"

# Create GitHub repository (replace YOUR_USERNAME)
gh repo create tarabot-mini-app --public --description "Tarabot Telegram Mini App - AI-powered Tarot readings"

# Add remote origin
git remote add origin https://github.com/YOUR_USERNAME/tarabot-mini-app.git

# Push to GitHub
git push -u origin main
```

### **Step 2: Deploy to Vercel**

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from GitHub (or local)
vercel --prod

# Follow prompts:
# - Link to existing project? No
# - Project name: tarabot-mini-app
# - Directory: ./
# - Override settings? No
```

### **Step 3: Configure Telegram Bot**

```bash
# In Telegram, message @BotFather:

# Create new bot
/newbot
# Bot name: Tarabot
# Bot username: @your_tarabot_bot

# Set Mini App URL
/setmenubutton
# Select your bot
# Button text: 🔮 Tarabot
# URL: https://your-vercel-app.vercel.app/tarabot-mini-app.html

# Optional: Set bot description
/setdescription
# Select your bot
# Description: AI-powered Tarot readings in your pocket! Get personalized insights and guidance through the ancient wisdom of the cards.
```

### **Step 4: Test Mini App**

```bash
# Test in Telegram:
# 1. Open your bot in Telegram
# 2. Click the menu button (🔮 Tarabot)
# 3. Mini App should open in Telegram
# 4. Test all functionality

# Test locally:
vercel dev
# Open http://localhost:3000/tarabot-mini-app.html
```

## 🔧 Configuration Files

### **package.json**
```json
{
  "name": "tarabot-mini-app",
  "version": "1.0.0",
  "description": "Tarabot Telegram Mini App",
  "main": "tarabot-mini-app.html",
  "scripts": {
    "dev": "vercel dev",
    "build": "echo 'No build step needed'",
    "start": "vercel dev"
  },
  "devDependencies": {
    "vercel": "^32.0.0"
  }
}
```

### **vercel.json**
```json
{
  "version": 2,
  "name": "tarabot-mini-app",
  "builds": [
    {
      "src": "api/**/*.js",
      "use": "@vercel/node"
    },
    {
      "src": "*.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

## 🌐 URLs After Deployment

### **Vercel URLs:**
- **Main Mini App**: `https://your-app.vercel.app/tarabot-mini-app.html`
- **Landing Page**: `https://your-app.vercel.app/index.html`
- **API Health**: `https://your-app.vercel.app/api/health`
- **API Auth**: `https://your-app.vercel.app/api/auth/telegram`

### **Telegram Bot:**
- **Bot Link**: `https://t.me/your_tarabot_bot`
- **Mini App URL**: Set in @BotFather menu button

## 🔐 Environment Variables (Optional)

### **In Vercel Dashboard:**
```bash
# Add these in Vercel project settings:
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_WEBHOOK_SECRET=your_webhook_secret
JWT_ACCESS_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_key
```

## 📱 Mini App Features

### **✅ What Works:**
- **Telegram WebApp SDK** integration
- **User authentication** via initData
- **Theme support** (light/dark mode)
- **Responsive design** for mobile
- **Tarot card readings** with mock AI
- **Diary functionality** for saving
- **Main Button** and **Back Button** support
- **Data sending** to Telegram bot

### **🎯 Telegram Integration:**
- `window.Telegram.WebApp.initData` - User data
- `window.Telegram.WebApp.initDataUnsafe.user` - User info
- `window.Telegram.WebApp.MainButton` - Action button
- `window.Telegram.WebApp.BackButton` - Navigation
- `window.Telegram.WebApp.sendData()` - Send data to bot

## 🚀 Production Checklist

### **Before Launch:**
- [ ] GitHub repository created and pushed
- [ ] Vercel deployment successful
- [ ] Telegram bot created via @BotFather
- [ ] Mini App URL configured in bot
- [ ] Test Mini App in Telegram
- [ ] Verify all functionality works
- [ ] Check responsive design on mobile

### **After Launch:**
- [ ] Monitor Vercel analytics
- [ ] Check Telegram bot usage
- [ ] Gather user feedback
- [ ] Plan backend integration
- [ ] Add real AI integration
- [ ] Implement Telegram Stars payments

## 🎉 Success!

Your Tarabot Mini App is now live and ready for Telegram users!

**Next Steps:**
1. **Share your bot** with friends and family
2. **Gather feedback** from early users
3. **Plan backend integration** for real data
4. **Add AI integration** with OpenAI
5. **Implement payments** with Telegram Stars

**Bot Link**: `https://t.me/your_tarabot_bot`

Happy divining! 🔮✨
