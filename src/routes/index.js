const Router = require("express").Router;
const FlavorController = require("../controllers/flavor");

const flavorVerification = require('../middleware/flavorVerification');
const validRequest = require("../middleware/validRequest");
const router = Router();

//Rotas de sabores de sorvete
router.get("/flavors", FlavorController.all);
router.get("/flavors/:id", FlavorController.byId);
router.post("/flavors", [...flavorVerification, validRequest], FlavorController.create);

module.exports = router;