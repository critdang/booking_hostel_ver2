const allowedOrigins = process.env.NODE_ENV === 'production'
  ? [
    'https://booking-hotel-fe.vercel.app',
    'https://www.critdang.tech'
  ] : [
    // Add your FE domains allowed origins here
    'http://localhost:3000',

  ];

module.exports = allowedOrigins;
