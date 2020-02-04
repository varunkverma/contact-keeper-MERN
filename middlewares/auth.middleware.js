const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");

  // Check if token is absent
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Check if token is valid
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    // if verified, decoded will contain the payload

    req.user = decoded.user;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ msg: "Token is invalid" });
  }
};
