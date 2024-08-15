const express = require('express');
const router = express.Router();

/* requerir modulo propio */
const autos = require('../db/index')

/* Ruta principal - Buscar todos los autos */
router.get('/', function(req, res) {
    return res.send(autos.lista)
});

/* Ruta parametrizada - Buscar por color */
router.get('/filtrarPorColor/:color?', (req, res) => {
    let colorBuscado = req.params.color;
    let autosEncontrados = [];

    for (let i = 0; i < autos.lista.length; i++) {
        if (autos.lista[i].color == colorBuscado) {
            autosEncontrados.push(autos.lista[i])
        }
    }

    if (autosEncontrados.length == 0) {
        return res.send("No hay autos de color buscado")
    } else {
        return res.send(autosEncontrados)
    }

});

/* Ruta parametrizada - Buscar por Año */
router.get('/filtrarPorAnio/:anio/:modelo', (req, res) => {
    let anioBuscado = req.params.anio;
    let autosEncontrados = [];

    for (let i = 0; i < autos.lista.length; i++) {
        if (autos.lista[i].anio == anioBuscado) {
            autosEncontrados.push(autos.lista[i])
        }
    }

    if (autosEncontrados.length == 0) {
        return res.send("No hay autos del año buscado")
    } else {
        return res.send(autosEncontrados)
    }

});


module.exports = router;