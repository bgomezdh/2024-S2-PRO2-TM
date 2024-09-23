let bandas = require('../db/bandas')

let bandasController = {
    index: function(req,res){
        return res.render("index", {info : bandas.lista} )        
    },
    detalle: function(req,res){
        return res.send("detalle")
    },
    genero: function(req,res){
        
    },
}



module.exports = bandasController;