export default function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { initData } = req.body;
    
    if (!initData) {
      return res.status(400).json({
        ok: false,
        data: null,
        error: 'initData is required'
      });
    }

    // Mock validation for demo purposes
    // In production, you would validate the Telegram initData here
    const mockUser = {
      id: 'demo_user_123',
      telegramId: '123456789',
      username: 'demo_user',
      firstName: 'Demo',
      lastName: 'User',
      languageCode: 'en',
      subscription: 'FREE',
      subscriptionUntil: null,
      referralCode: 'DEMO123',
      referredBy: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // Mock JWT tokens
    const mockTokens = {
      accessToken: 'mock_access_token_' + Date.now(),
      refreshToken: 'mock_refresh_token_' + Date.now(),
      expiresIn: 900 // 15 minutes
    };

    res.status(200).json({
      ok: true,
      data: {
        user: mockUser,
        tokens: mockTokens
      },
      error: null
    });

  } catch (error) {
    console.error('Auth error:', error);
    res.status(500).json({
      ok: false,
      data: null,
      error: 'Internal server error'
    });
  }
}