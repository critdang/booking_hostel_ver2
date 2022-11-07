require('dotenv').config();
const jwt = require('jsonwebtoken');

const generateJWT = (payload, expired) => {
  const key = process.env.ACCESS_TOKEN_SECRET;
  try {
    const token = jwt.sign(payload, key, {
      expiresIn: expired,
    });
    return token;
  } catch (e) {
    return e;
  }
};

const authenticateToken = (req, res, next) => {
  try {
    const { token } = req.cookies;
    const key = process.env.ACCESS_TOKEN_SECRET;
    jwt.verify(token, key, (err) => {
      if (err) {
        return res.redirect('/login');
      }
      return next();
    });
  } catch (err) {
    console.log('expired tokeen');
  }
};

const verifyToken = (token) => {
  try {
    const key = process.env.ACCESS_TOKEN_SECRET;
    const result = jwt.verify(token, key);
    return result;
  } catch (e) {
    return e;
  }
};

module.exports = {
  generateJWT,
  authenticateToken,
  verifyToken,
};
