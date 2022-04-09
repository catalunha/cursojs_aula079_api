"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _user = require('../models/user'); var _user2 = _interopRequireDefault(_user);

class UserController {
  async create(req, res) {
    try {
      const novoUser = await _user2.default.create(req.body);
      return res.json(novoUser);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async list(req, res) {
    try {
      const users = await _user2.default.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async read(req, res) {
    console.log('userId = ', req.userId);
    console.log('userEmail = ', req.userEmail);
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Falta Id'],
        });
      }
      const user = await _user2.default.findByPk(id);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }
      return res.json(user);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      // const { id } = req.params;
      const id = req.userId;
      if (!id) {
        return res.status(400).json({
          errors: ['Falta Id'],
        });
      }
      const user = await _user2.default.findByPk(id);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }
      const userUpdated = await user.update(req.body);
      return res.json(userUpdated);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const id = req.userId;
      // const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Falta Id'],
        });
      }
      const user = await _user2.default.findByPk(id);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }
      await user.destroy();
      return res.json(user);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}
// export a instancia da classe
exports. default = new UserController();

// situação em que podemos fazer crud livre no usuario
// import User from '../models/user';

// class UserController {
//   async create(req, res) {
//     try {
//       const novoUser = await User.create(req.body);
//       return res.json(novoUser);
//     } catch (error) {
//       return res.status(400).json({
//         errors: error.errors.map((err) => err.message),
//       });
//     }
//   }

//   async list(req, res) {
//     try {
//       const users = await User.findAll();
//       return res.json(users);
//     } catch (error) {
//       return res.status(400).json({
//         errors: error.errors.map((err) => err.message),
//       });
//     }
//   }

//   async read(req, res) {
//     console.log('userId = ', req.userId);
//     console.log('userEmail = ', req.userEmail);
//     try {
//       const { id } = req.params;
//       if (!id) {
//         return res.status(400).json({
//           errors: ['Falta Id'],
//         });
//       }
//       const user = await User.findByPk(id);
//       if (!user) {
//         return res.status(400).json({
//           errors: ['Usuário não existe'],
//         });
//       }
//       return res.json(user);
//     } catch (error) {
//       return res.status(400).json({
//         errors: error.errors.map((err) => err.message),
//       });
//     }
//   }

//   async update(req, res) {
//     try {
//       const { id } = req.params;
//       if (!id) {
//         return res.status(400).json({
//           errors: ['Falta Id'],
//         });
//       }
//       const user = await User.findByPk(id);
//       if (!user) {
//         return res.status(400).json({
//           errors: ['Usuário não existe'],
//         });
//       }
//       const userUpdated = await user.update(req.body);
//       return res.json(userUpdated);
//     } catch (error) {
//       return res.status(400).json({
//         errors: error.errors.map((err) => err.message),
//       });
//     }
//   }

//   async delete(req, res) {
//     try {
//       const { id } = req.params;
//       if (!id) {
//         return res.status(400).json({
//           errors: ['Falta Id'],
//         });
//       }
//       const user = await User.findByPk(id);
//       if (!user) {
//         return res.status(400).json({
//           errors: ['Usuário não existe'],
//         });
//       }
//       await user.destroy();
//       return res.json(user);
//     } catch (error) {
//       return res.status(400).json({
//         errors: error.errors.map((err) => err.message),
//       });
//     }
//   }
// }
// // export a instancia da classe
// export default new UserController();
