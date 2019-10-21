const express = require("express");
const app = express();

const router = require("./routes");

const { requestLogger, errorHandler, notFound } = require("./middleware");

app.use(requestLogger);

app.use(express.json());

app.use(router);

app.use(notFound);

app.use(errorHandler);

app.listen(5000);
console.log("Rodando na porta ${5000}");