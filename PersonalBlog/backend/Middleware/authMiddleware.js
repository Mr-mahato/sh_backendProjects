const { verifyToken } = require("../Utils/jwt");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    const result = verifyToken(token);
    if (!result.valid) {
      return res
        .status(401)
        .json({ message: "Invalid token", error: result.error });
    }
    req.user = result.decoded;
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = authMiddleware;
