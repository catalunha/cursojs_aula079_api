import jwt from 'jsonwebtoken';
import User from '../models/user';

export default async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(400).json({
      errors: ['Informe token para acesso.'],
    });
  }
  const [, token] = authorization.split(' ');
  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;
    const user = await User.findOne({ where: { id, email } });
    if (!user) {
      return res.status(400).json({
        errors: ['Email atual diferente do informado no token'],
      });
    }
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (error) {
    return res.status(400).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};
