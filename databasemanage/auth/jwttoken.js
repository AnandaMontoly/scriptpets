const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const user = require('../models/user.js')
//https://bezkoder.com/node-js-jwt-authentication-mysql/
function verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized user"
      });
    }
    req.userId = decoded.id;
    next();
  });
};



module.exports = verifyToken;