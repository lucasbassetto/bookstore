import jwt from "jsonwebtoken";

class AuthenticationController {

  static async login(req, res) {
    // #swagger.summary = 'Login'
    // #swagger.description = 'User authentication'
    
    let { user, password } = req.body;
    if (user != "" && user == password) {
      let token = jwt.sign({ user: user }, "123!@#", { expiresIn: "1h" });
      res.json({ logged: true, token: token });
    } else {
      res.status(403).json({ logged: false, message: "Invalid user or password" });
    }
  }
}

export default AuthenticationController;