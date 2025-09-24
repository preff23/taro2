export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    data: {
      status: 'online',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'production',
      version: '1.0.0'
    },
    error: null
  });
}