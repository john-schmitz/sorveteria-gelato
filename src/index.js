const express = require("express");
const app = express();

const router = require("./routes");

const requestLogger = require("./middleware/requestLogger");

app.use(requestLogger);

app.use(express.json());

app.use(router);

app.use(function (req, res, next) {
  return res.status(404).send({message: "not found"})
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(5000);
console.log("Rodando na porta ${5000}");