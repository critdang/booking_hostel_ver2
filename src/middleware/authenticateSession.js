require('dotenv').config();
const jwt = require('jsonwebtoken');

const isAuth = (req, res, next) => {
  const authHeader = req.header('authorization');
  if (authHeader == null) {
    return res.status(401).json({ error: "Access-denied" });
  }
  try {
    const key = process.env.JWT_SECRET;
    const id = jwt.verify(authHeader, key);
    req.id = { id };
    return next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid-token" });
  }
};
module.exports = { isAuth };
