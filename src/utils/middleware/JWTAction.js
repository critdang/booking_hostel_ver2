require('dotenv').config();
const jwt = require('jsonwebtoken');
const client = require('../../config/connectRedis');

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

const generateRefreshToken = async (userId) => {
  const key = process.env.REFRESH_TOKEN_SECRET;
  const expiresIn = '1d';
  const expiresTokenOnRedis = 1 * 24 * 60 * 60;
  const payload = { userId };
  try {
    const refreshToken = jwt.sign(payload, key, {
      expiresIn,
    });
    await client.set(userId.toString(), refreshToken, 'EX', expiresTokenOnRedis);
    return refreshToken;
  } catch (error) {
    return error;
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

const verifyRefreshToken = (token) => {
  try {
    const key = process.env.REFRESH_TOKEN_SECRET;
    const result = jwt.verify(token, key);
    const tokenOnRedis = client.get(result.userId);
    if (token === tokenOnRedis) {
      return result;
    }
    return result;
  } catch (e) {
    return e;
  }
};

module.exports = {
  generateJWT,
  generateRefreshToken,
  authenticateToken,
  verifyToken,
  verifyRefreshToken
};
