"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _user = require('../models/user'); var _user2 = _interopRequireDefault(_user);

require('dotenv').config();

class TokenController {
  async create(req, res) {
    const { email = '', password = '' } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        errors: ['Usuário/Email não informado.'],
      });
    }
    const user = await _user2.default.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({
        errors: ['Usuário não existe'],
      });
    }
    const passwordIsValid = await user.passwordIsValid(password);
    if (!passwordIsValid) {
      return res.status(400).json({
        errors: ['Senha não confere'],
      });
    }
    const { id } = user;
    const token = _jsonwebtoken2.default.sign(
      { id, email },
      process.env.TOKEN_SECRET,
      { expiresIn: process.env.TOKEN_EXPIRATION },
    );
    return res.json({ token });
  }
}
// export a instancia da classe
exports. default = new TokenController();
