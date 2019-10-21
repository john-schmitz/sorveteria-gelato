const Router = require('express').Router;
const FlavorController = require('../controllers/FlavorController');

const flavorVerification = require('../middleware/verification/flavorVerification');
const validRequest = require('../middleware/validRequest');
const router = new Router();

//Rotas de sabores de sorvete
router.get('', FlavorController.all);
router.get('/:id', FlavorController.byId);
router.post('', [...flavorVerification, validRequest], FlavorController.create);


module.exports = router;