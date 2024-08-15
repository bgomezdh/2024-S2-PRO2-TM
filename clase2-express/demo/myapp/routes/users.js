var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('hola desde la ruta de usuarios');
});

router.get('/saludar', function(req, res) {
  res.send('hola a todos');
});

module.exports = router;


