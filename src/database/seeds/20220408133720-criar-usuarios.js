const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        nome: 'a',
        email: 'a@gmail.com',
        password_hash: bcryptjs.hash('123456', 8),
      },
      {
        nome: 'b',
        email: 'b@gmail.com',
        password_hash: bcryptjs.hash('123456', 8),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
