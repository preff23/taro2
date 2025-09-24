// Vercel API function for Telegram authentication
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

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { initData } = req.body;

    // Mock authentication response
    // In production, you would verify the initData signature
    const response = {
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
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ 
      ok: false,
      data: null,
      error: {
        message: 'Authentication failed',
        details: error.message
      }
    });
  }
}
