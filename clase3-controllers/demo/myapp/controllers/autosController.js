const autos = require('../db/index');

const autosController = {
    index: (req, res) => {
        return res.render('autos', {listado: autos.lista, titulo: "Mis autos"});
        return res.send(autos.lista)
    },
    filtrarColor: (req, res) => {
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
           return res.render('autos', 
            {
             titulo: "Filtrado por Color", 
             listado: autosEncontrados
            });
        }
    
    },
    filtrarAnnio: (req, res) => {
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
    
    }
};

module.exports = autosController;