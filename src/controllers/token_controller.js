import jwt from 'jsonwebtoken';
import User from '../models/user';

require('dotenv').config();

class TokenController {
  async create(req, res) {
    const { email = '', password = '' } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        errors: ['Usuário/Email não informado.'],
      });
    }
    const user = await User.findOne({ where: { email } });
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
    const token = jwt.sign(
      { id, email },
      process.env.TOKEN_SECRET,
      { expiresIn: process.env.TOKEN_EXPIRATION },
    );
    return res.json({ token });
  }
}
// export a instancia da classe
export default new TokenController();
