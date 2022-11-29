const allowedOrigins = process.env.NODE_ENV === 'production'
  ? [
    process.env.DOMAIN_FE,
    process.env.DOMAIN_FE_PROD
  ] : [
    // Add your FE domains allowed origins here
    'http://localhost:3000',

  ];

module.exports = allowedOrigins;
