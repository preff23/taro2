// Vercel API function to proxy requests to backend
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    // For demo purposes, return mock data
    // In production, you would proxy to your actual backend
    const mockResponses = {
      '/health': {
        status: 'healthy',
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        message: 'Tarabot Backend is running! 🔮✨'
      },
      '/auth/telegram': {
        ok: true,
        data: {
          accessToken: 'mock_jwt_token_' + Date.now(),
          refreshToken: 'mock_refresh_token_' + Date.now(),
          user: {
            id: 'user_123',
            telegramId: '123456789',
            username: 'demo_user',
            firstName: 'Demo',
            lastName: 'User',
            subscription: 'FREE',
            subscriptionUntil: null,
            referralCode: 'DEMO123',
            starsBalance: 0
          }
        },
        error: null
      }
    };

    const path = req.url.replace('/api', '');
    const mockResponse = mockResponses[path];

    if (mockResponse) {
      res.status(200).json(mockResponse);
    } else {
      res.status(404).json({ error: 'Endpoint not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
