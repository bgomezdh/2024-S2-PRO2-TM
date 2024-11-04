var express = require('express');
var router = express.Router();

/* requerir el modelo del controlador */
const movieController = require('../controllers/movieController');

/* GET home page. */
router.get('/', movieController.index);

/* GET details movie page. */
router.get('/id/:idPelicula', movieController.detalle);

/* GET Creat movie page. */
router.get('/register', movieController.showFormCreate);
router.post('/register',movieController.store)

// update
router.get("/update/:id",movieController.showFormUpdate)
router.post("/update",movieController.update)
/* GET Search movie page. */
router.get('/busqueda', movieController.search);

module.exports = router;