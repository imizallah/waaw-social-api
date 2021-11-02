const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
  let token = req.headers["access-token"];
  if (!token) return res.status(403).json({msg: 'You need to login to perform this action'});

  jwt.verify(token, 'KOPjio*(^&**%^yG7657^YGU)', (err, decoded) => {
    if(err) return res.status(401).json({msg: 'Unauthorized, Invalid token'});

    req.user = decoded.findUser;

    next();
  });
}

module.exports = verifyToken;