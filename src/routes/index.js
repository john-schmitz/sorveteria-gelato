const Router = require("express").Router;
const FlavorController = require("../controllers/flavor");
const TransactionController = require("../controllers/transaction");

const router = Router();

//Rotas de sabores de sorvete
router.get("/flavor", FlavorController.all);
router.get("/flavor/:id", FlavorController.byId);
router.post("/flavor", FlavorController.create);

//Rotas de vendas

router.get("/transaction", TransactionController.all);
router.post("/transaction", TransactionController.sell);


module.exports = router;