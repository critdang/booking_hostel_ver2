const allowedOrigins = process.env.NODE_ENV === 'production'
  ? [
    'https://booking-hotel-fe.vercel.app',
    'https://booking-hotel-dashboard.vercel.app/',
    'https://www.critdang.tech',
    'http://localhost:3001'
  ] : [
    // Add your FE domains allowed origins here
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:19006'
  ];

module.exports = allowedOrigins;
