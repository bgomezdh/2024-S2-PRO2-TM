var express = require('express');
var router = express.Router();

/* requerir en controlador necesario */
const indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.index );

module.exports = router;
