const bandas = require("../data/db");
const bandasController={
  index:function(req, res, next) {
    return res.render('bandas', { title: 'Express',listaBandas:bandas.lista });
  },
  filtrarporgenero: function(req, res, next) {

    return res.render('index', { title: 'Express' });
  },
  filtrarporid: function(req, res, next) {
    
    let id = req.params.id;

    let encontrado = null;
    for (let i = 0; i < bandas.lista.length; i++) {
        if(bandas.lista[i].id == id){
            encontrado = bandas.lista[i];
        }  
    }



    return res.render('detalle', {title: "hola", detalleBanda: encontrado});
 
    return res.render('detalleBanda', { title: 'Express', detalleBanda: encontrado  });
  }
  
};
module.exports = bandasController;
