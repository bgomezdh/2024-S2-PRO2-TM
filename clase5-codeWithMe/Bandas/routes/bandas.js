var express = require('express');
var router = express.Router();
 
let bandasController = require("../controllers/bandasControllers");

router.get ('/', bandasController.index);
router.get ('/filtrarPorId/:id', bandasController.filtrarporid);
router.get ('/filtrarPorGenero/:genero',bandasController.filtrarporgenero);


module.exports = router;