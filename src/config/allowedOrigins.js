const allowedOrigins = process.env.NODE_ENV === 'production'
  ? [
    // production environment allowed origins
    'https://booking-hotel-fe.vercel.app',
    'https://booking-hotel-dashboard.vercel.app/',
    'https://www.critdang.tech',
    'http://localhost:3001'
  ] : [
    // development environment allowed origins
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:19006'
  ];

module.exports = allowedOrigins;
