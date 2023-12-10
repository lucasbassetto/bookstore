import jwt from "jsonwebtoken";

export const isAuthenticated = (req, res, next) => {
  let bearerToken = req.headers["authorization"] || "";
  let token = bearerToken.split(" ");
  if (token[0] == "Bearer") {
    token = token[1];
  }
  console.log(token);
  jwt.verify(token, "123!@#", (err, decoded) => {
    if (err) {
      res.status(403).json({ message: "Invalid token" });
    } else {
      req.user = decoded.user;
      next();
    }
  });
};