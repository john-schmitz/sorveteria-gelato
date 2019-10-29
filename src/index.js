const express = require('express');
const app = express();

app.use(express.json());

app.listen(5000, () => {
  console.log('Rodando na porta 5000');
});

Flavor.create({name: 'Flocos', calories_per_serving: 200, product_line: "Deluxe", quantity: 200, price: 2.9});