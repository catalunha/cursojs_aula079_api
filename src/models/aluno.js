import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 200],
            msg: 'Campo NOME entre 3 e 200 caracteres',
          },
        },
      },
      snome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 200],
            msg: 'Campo NOME entre 3 e 200 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
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
      nascimento: Sequelize.DATE,
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: 1,
        validate: {
          isFloat: {
            msg: 'Peso é inteiro ou decimal. Maior que 1 kg',
          },
        },
      },
      altura: {
        type: Sequelize.STRING,
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
}
