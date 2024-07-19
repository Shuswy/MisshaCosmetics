const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  if (req.session.isAuthenticated) {
    return next();
  }

  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (token) {
    try {
      const decoded = jwt.verify(token, 'your_jwt_secret');
      req.user = decoded;
      return next();
    } catch (error) {
      return res.status(401).send('Invalid token');
    }
  }

  console.log('No valid session or token found');
  res.status(401).send('User not authenticated');
};

module.exports = authenticate;
