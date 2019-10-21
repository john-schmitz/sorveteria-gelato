## Sorveteria Gelato

Uma aplicaçao que eu fiz para um minicurso que apresentei para uma materia do meu ensino tecnico.

## Setup do projeto

### Dependências
Para instalar as dependencias  do projeto:
```bash
npm install
```
### Banco de dados
Configure seu acesso ao banco de dados no arquivo config/database.js:

```javascript
  module.exports = {
    username: "docker",
    password: "bololo123",
    database: "sorveteria_gelato",
    host: "127.0.0.1",
    dialect: "mysql",
    difine: {
      timestamps: true,
      underscored: true
    },
    logging: false
  }
```

Para criar o banco:
```bash
npx sequelize db:create
```

Para rodar as migrations (tem so uma 😉):

```bash
npx sequelize db:migrate
```

### Rodando o projeto

Rodar o projeto com hot-reloading:
```bash
npm run dev
```
Rodar o projeto:
```bash
npm run start
```