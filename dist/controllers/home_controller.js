"use strict";Object.defineProperty(exports, "__esModule", {value: true});class HomeController {
  async index(req, res) {
    res.json({ home: 'rota inicial' });
  }
}
// export a instancia da classe
exports. default = new HomeController();
