require('dotenv').config();
const jwt = require('jsonwebtoken');

const generateJWT = (userId) => {
  const payload = {
    id: userId,
  };
  const key = process.env.JWT_SECRET;
  let token;
  try {
    token = jwt.sign(payload, key, {
      expiresIn: '15m',
    });
  } catch (e) {
    console.log(e);
  }
  return token;
};

const authenticateToken = (req, res, next) => {
  try {
    const { token } = req.cookies;
    const key = process.env.JWT_SECRET;
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

const generateJWTForVerifyRegister = (userId) => {
  const payload = {
    id: userId,
  };
  const key = process.env.JWT_SECRET;
  let token;
  try {
    token = jwt.sign(payload, key, {
      expiresIn: '1d',
    });
  } catch (e) {
    console.log(e);
  }
  return token;
};

const verifyToken = (token) => {
  try {
    const key = process.env.JWT_SECRET;
    const id = jwt.verify(token, key);
    return id;
  } catch (e) {
    console.log(e);
    return null;
  }
};

module.exports = {
  generateJWT,
  authenticateToken,
  generateJWTForVerifyRegister,
  verifyToken,
};
