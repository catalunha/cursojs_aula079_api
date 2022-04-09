"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _aluno = require('../models/aluno'); var _aluno2 = _interopRequireDefault(_aluno);
var _foto = require('../models/foto'); var _foto2 = _interopRequireDefault(_foto);

class AlunoController {
  async create(req, res) {
    try {
      const aluno = await _aluno2.default.create(req.body);
      res.json(aluno);
    } catch (error) {
      res.status(400).json({
        errors: ['Erro em Aluno.create'],
      });
    }
  }

  async list(req, res) {
    const alunos = await _aluno2.default.findAll({
      attributes: ['id', 'nome', 'snome', 'email', 'nascimento', 'peso', 'altura'],
      order: [['id', 'DESC'], [_foto2.default, 'id', 'DESC']],
      include: {
        model: _foto2.default,
        attributes: ['id', 'url', 'originalname', 'filename', 'updatedAt', 'aluno_id'],
      },
    });
    res.json(alunos);
  }

  async read(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({
          errors: ['FaltaId'],
        });
      }
      const aluno = await _aluno2.default.findByPk(id, {
        attributes: ['id', 'nome', 'snome', 'email', 'nascimento', 'peso', 'altura'],
        order: [['id', 'DESC'], [_foto2.default, 'id', 'DESC']],
        include: {
          model: _foto2.default,
          attributes: ['id', 'url', 'originalname', 'filename', 'updatedAt', 'aluno_id'],
        },
      });
      if (!aluno) {
        res.status(400).json({
          errors: ['Aluno com este Id não encontrado'],
        });
      }
      res.json(aluno);
    } catch (error) {
      res.status(400).json({
        errors: ['Erro em Aluno.read'],
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({
          errors: ['FaltaId'],
        });
      }
      const aluno = await _aluno2.default.findByPk(id);
      if (!aluno) {
        res.status(400).json({
          errors: ['Aluno com este Id não encontrado'],
        });
      }
      const alunoUpdated = await aluno.update(req.body);
      res.json(alunoUpdated);
    } catch (error) {
      res.status(400).json({
        errors: ['Erro em Aluno.update'],
      });
    }
  }

  // async change(req, res) {
  //   try {
  //     const { id } = req.params;
  //     if (!id) {
  //       res.status(400).json({
  //         errors: ['FaltaId'],
  //       });
  //     }
  //   } catch (error) {
  //     res.status(400).json({
  //       errors: ['Erro em Aluno.change'],
  //     });
  //   }
  // }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({
          errors: ['FaltaId'],
        });
      }
      const aluno = await _aluno2.default.findByPk(id);
      if (!aluno) {
        res.status(400).json({
          errors: ['Aluno com este Id não encontrado'],
        });
      }
      await aluno.destroy();
      res.json(aluno);
    } catch (error) {
      res.status(400).json({
        errors: ['Erro em Aluno.delete'],
      });
    }
  }
}
// export a instancia da classe
exports. default = new AlunoController();
