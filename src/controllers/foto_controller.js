import multer from 'multer';
import multerConfig from '../config/multer_config';
import Foto from '../models/foto';

const upload = multer(multerConfig);

class FotoController {
  // async index(req, res) {
  //   res.json({ home: 'Foto.index ok' });
  // }

  async list(req, res) {
    try {
      const fotos = await Foto.findAll();
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
        const foto = await Foto.create({ originalname, filename, aluno_id });
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
export default new FotoController();
