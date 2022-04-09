class HomeController {
  async index(req, res) {
    res.json({ home: 'rota inicial' });
  }
}
// export a instancia da classe
export default new HomeController();
