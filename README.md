# Ações basicas para reiniciar programação no dia seguinte

## Open terminal para logar no servidor
catalunha@pop-os:~$ ssh catalunha@34.95.224.209

## Open terminal para conectar ao mariaDB
catalunha@pop-os:~$ mysql -h 34.95.224.209 -P 3306 -u root -p
Enter password: ctn_mariadb_srv_gcp

Acessando DB
use escola;

## rodando server em localhost
Executar o nodemon para pegar a atualizações de edição e transpilar com o sucrase de um js moderno para um js mais old.
catalunha@pop-os:~/myapp/cursojs/node/aula079api$ npm run dev

## acessando a api em nuvem



# instalando o editor config no vs code
Para controlar padrao de edição
 veja arquivo .editorconfig

# iniciar npm

catalunha@pop-os:~/myapp/cursojs/node/aula079api$ npm init -y

catalunha@pop-os:~/myapp/cursojs/node/aula079api$ npx eslint --init
Need to install the following packages:
  eslint
Ok to proceed? (y) y
You can also run this command directly using 'npm init @eslint/config'.
Need to install the following packages:
  @eslint/create-config
Ok to proceed? (y) y
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · node
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · JavaScript
Checking peerDependencies of eslint-config-airbnb-base@latest
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

eslint-config-airbnb-base@latest eslint@^7.32.0 || ^8.2.0 eslint-plugin-import@^2.25.2
✔ Would you like to install them now with npm? · No / Yes
Installing eslint-config-airbnb-base@latest, eslint@^7.32.0 || ^8.2.0, eslint-plugin-import@^2.25.2

added 143 packages, and audited 144 packages in 12s

45 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Successfully created .eslintrc.js file in /home/catalunha/myapp/cursojs/node/aula079api
catalunha@pop-os:~/myapp/cursojs/node/aula079api$

# eslint
acrescentar estes itens no json
    "eslint.validate": [
        {
            "language": "javascript",
            "autoFix": true
        },
    ],
    "eslint.autoFixOnSave": true,

# nodemon e sucrase
```
$ npm install nodemon sucrase --save-dev
criar o arquivo nodemon.json
criar script em package.json
  "scripts": {
    "dev":"nodemon server.js"
  },
```
rever este conceito de que import export so funciona no browser e nao no node.

# instalar express
```
$ npm install express

```

classes e funcoes construtoraas começam com letra maiuscula.

# dotenv

```
$ npm install dotenv
```

conteúdo do dotenv
```
DATABASE=escola
DATABASE_HOST=34.95.224.209
DATABASE_PORT=3306
DATABASE_USERNAME=root
DATABASE_PASSWORD=ctn_mariadb_srv_gcp

TOKEN_SECRET=hash_token_secret
TOKEN_EXPIRATION=7d
```

# Ações no database
conectando ao mariaDB
catalunha@pop-os:~$ mysql -h 34.95.224.209 -P 3306 -u root -p
Enter password: ctn_mariadb_srv_gcp


instalar pacote do mariadb
```
$ npm install mariadb
```
CREATE SCHEMA escola DEFAULT CHARACTER SET = 'utf8mb4'  COLLATE = 'utf8mb4_general_ci';

MariaDB [(none)]> use escola;
MariaDB [escola]> show tables;
MariaDB [escola]> SHOW COLUMNS FROM alunos;
MariaDB [escola]> select * from alunos;



https://sebhastian.com/sequelize-date-format/

# ações no sequelize
instalando pacote do sequelize

```
$ npm install sequelize
$ npm install sequelize-cli --save-dev
```
gerar uma migration pra criar os campos
```
$ npx sequelize migration:create --name=alunos
```
aplicar a migration na database
```
$ npx sequelize db:migrate
```
desfazer uma tabela
```
$ npx sequelize db:migrate:undo
```

## criando alunos
```
$ npx sequelize migration:create --name=alunos
```
Arquivo original de migration pra editar campos:
```
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
```
apos construir a tabela pede para realizar a migration
```
$ npx sequelize db:migrate
```
## crindo users
exec o comando
```
$ npx sequelize migration:create --name=users
```
O sequelize cria a migration em
src/database/migrations/20220407192347-users.js

edita o necessario para criar a tabela. e mandar criar com
```
$ npx sequelize db:migrate
```
# bcryptjs
instalar para cryptografar a senha
```
$ npm install bcryptjs
```


# nome padrao dos methods
CCRULD| GPDPP nomes rest | metodos | descrição
---|---|---|---
create |post| create | cria um novo usuario
list | get |list | lista todos os usuarios
read |get/:id| read | mostra um usuario
delete |delete/:id| delete | apagar usuario
change |put/:id| change | troca o objeto inteiro
update |patch/:id| update | altera alguns valores




# instalando o jsonwebtoken

```
$ npm install jsonwebtoken
```


# update gitignore
git rm -r --cached .
git add .
git commit -am "Remove ignored files"




# trabalhando com seeds
```
$ npx sequelize seed:generate --name criar-usuarios
```
apos editar o seeds em src/database/seeds/20220408130510-criar-usuarios.js

vamos mandar executar com

```
$ npx sequelize db:seed:all
```
codigos q nao deram certo no seed
```
const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('users', [
    {
      nome: 'a',
      email: 'a@gmail.com',
      password_hash: bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'b',
      email: 'b@gmail.com',
      password_hash: bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
  ], {}),

  down: () => {},
};

// old

// const bcryptjs = require('bcryptjs');

// module.exports = {
//   async up(queryInterface) {
//     await queryInterface.bulkInsert('users', [
//       {
//         nome: 'a',
//         email: 'a@gmail.com',
//         password_hash: bcryptjs.hash('123456', 8),
//         created_at: new Date(),
//         updated_at: new Date(),
//       },
//       {
//         nome: 'b',
//         email: 'b@gmail.com',
//         password_hash: bcryptjs.hash('123456', 8),
//         created_at: new Date(),
//         updated_at: new Date(),
//       },
//     ], {});
//   },

//   async down(queryInterface) {
//     await queryInterface.dropTable('users');
//   },
// };
```
O seed nao deu certo esta com este erro:
```
catalunha@pop-os:~/myapp/cursojs/node/aula079api$ npx sequelize db:seed:all --debug

Sequelize CLI [Node: 12.22.5, CLI: 6.4.1, ORM: 6.18.0]

Loaded configuration file "src/config/database.js".
== 20220408133720-criar-usuarios: migrating =======

ERROR: Error: Invalid value Promise { <pending> }
    at Object.escape (/home/catalunha/myapp/cursojs/node/aula079api/node_modules/sequelize/lib/sql-string.js:52:11)
    at MariaDBQueryGenerator.escape (/home/catalunha/myapp/cursojs/node/aula079api/node_modules/sequelize/lib/dialects/abstract/query-generator.js:709:22)
    at /home/catalunha/myapp/cursojs/node/aula079api/node_modules/sequelize/lib/dialects/abstract/query-generator.js:233:21
    at Array.map (<anonymous>)
    at MariaDBQueryGenerator.bulkInsertQuery (/home/catalunha/myapp/cursojs/node/aula079api/node_modules/sequelize/lib/dialects/abstract/query-generator.js:229:36)
    at MySQLQueryInterface.bulkInsert (/home/catalunha/myapp/cursojs/node/aula079api/node_modules/sequelize/lib/dialects/abstract/query-interface.js:335:68)
    at Object.up (/home/catalunha/myapp/cursojs/node/aula079api/src/database/seeds/20220408133720-criar-usuarios.js:5:26)
    at /home/catalunha/myapp/cursojs/node/aula079api/node_modules/umzug/lib/migration.js:132:33
    at Generator.next (<anonymous>)
    at asyncGeneratorStep (/home/catalunha/myapp/cursojs/node/aula079api/node_modules/umzug/lib/migration.js:9:103)
    at _next (/home/catalunha/myapp/cursojs/node/aula079api/node_modules/umzug/lib/migration.js:11:194)
    at processTicksAndRejections (internal/process/task_queues.js:97:5)

catalunha@pop-os:~/myapp/cursojs/node/aula079api$

```

# modificando uma tabela
```
$ npx sequelize migration:create --name=alunos-email-unique

```
editar a coluna e
```
$ npx sequelize db:migrate

```

# upload de arquivos

```
$ npm install multer
```
muito massa

# criando relacionamento entre tabelas
$ npx sequelize migration:create --name=alunos-foto
criar tabela na ORM
$ npx sequelize db:migrate


# testes no servidor
  users:
  {
    "id": 6,
    "nome": "Ana",
    "email": "ana@gmail.com"
  },
  senha:123456
