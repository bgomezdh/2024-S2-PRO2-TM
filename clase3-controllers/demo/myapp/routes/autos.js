const express = require('express');
const router = express.Router();

/* requerir modulo propio */
const autosController = require('../controllers/autosController')

/* Ruta principal - Buscar todos los autos */
router.get('/', autosController.index);

/* Ruta parametrizada - Buscar por color */
router.get('/filtrarPorColor/:color?', autosController.filtrarColor);

/* Ruta parametrizada - Buscar por Año */
router.get('/filtrarPorAnio/:anio/:modelo', autosController.filtrarAnnio);


module.exports = router;