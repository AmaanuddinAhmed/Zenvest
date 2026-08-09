require("dotenv").config();

const { UsersModel } = require("../model/UsersModel");
const jwt = require("jsonwebtoken");

// used by GET /users so the frontend/dashboard can check "am I logged in"
// without getting redirected or a 401 - just a plain status flag
module.exports.userVerification = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await UsersModel.findById(data.id);
      if (user) return res.json({ status: true, user: user.username });
      else return res.json({ status: false });
    }
  });
};

// actual route-protecting middleware - blocks the request with 401
// instead of resolving it, and attaches req.userId for the route to use
module.exports.requireAuth = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Not logged in" });
  }
  jwt.verify(token, process.env.TOKEN_KEY, (err, data) => {
    if (err) {
      return res.status(401).json({ message: "Session expired, please log in again" });
    }
    req.userId = data.id;
    next();
  });
};