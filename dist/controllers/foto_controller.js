"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multer_config = require('../config/multer_config'); var _multer_config2 = _interopRequireDefault(_multer_config);
var _foto = require('../models/foto'); var _foto2 = _interopRequireDefault(_foto);

const upload = _multer2.default.call(void 0, _multer_config2.default);

class FotoController {
  // async index(req, res) {
  //   res.json({ home: 'Foto.index ok' });
  // }

  async list(req, res) {
    try {
      const fotos = await _foto2.default.findAll();
      return res.json(fotos);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async create(req, res) {
    console.log(req.body);
    const uploadGet = upload.single('foto');
    return uploadGet(req, res, async (err) => {
      if (err) {
        res.status(400).json({
          errors: [err.code],
        });
      }

      try {
        const { aluno_id } = req.body;
        const { originalname, filename } = req.file;
        const foto = await _foto2.default.create({ originalname, filename, aluno_id });
        return res.json({ foto: req.file, fotoDb: foto, body: req.body });
      } catch (error) {
        return res.status(400).json({
          errors: ['Erro ao salvar foto. Problema na foto ou aluno nao existe'],
        });
      }
    });

    // try {
    //   const aluno = await Aluno.create(req.body);
    //   res.json(aluno);
    // } catch (error) {
    //   res.status(400).json({
    //     errors: ['Erro em Aluno.create'],
    //   });
    // }
  }
}
// export a instancia da classe
exports. default = new FotoController();
