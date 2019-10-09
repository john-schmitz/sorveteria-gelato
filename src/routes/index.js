const {
  check,
  validationResult
} = require('express-validator');

const Router = require("express").Router;
const FlavorController = require("../controllers/flavor");

const router = Router();

//Rotas de sabores de sorvete
router.get("/flavor", FlavorController.all);
router.get("/flavor/:id", FlavorController.byId);
router.post("/flavor", [
            check('name').isString(),
            check('calories').isDecimal(),
            check('productLine'),
            check('quantity').isInt(),
            check('price').isDecimal()
          ],
          FlavorController.create);

module.exports = router;