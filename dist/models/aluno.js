"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 200],
            msg: 'Campo NOME entre 3 e 200 caracteres',
          },
        },
      },
      snome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 200],
            msg: 'Campo NOME entre 3 e 200 caracteres',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      nascimento: _sequelize2.default.DATE,
      peso: {
        type: _sequelize2.default.FLOAT,
        defaultValue: 1,
        validate: {
          isFloat: {
            msg: 'Peso é inteiro ou decimal. Maior que 1 kg',
          },
        },
      },
      altura: {
        type: _sequelize2.default.STRING,
        defaultValue: 0.50,
        validate: {
          isFloat: {
            msg: 'Altura é inteiro ou decimal. Maior que 0.50m',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
} exports.default = Aluno;
