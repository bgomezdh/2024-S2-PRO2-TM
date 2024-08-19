var express = require('express');
var router = express.Router();

/* controlador */
const usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', usersController.index);

router.get('/saludar', usersController.saludar);

module.exports = router;


