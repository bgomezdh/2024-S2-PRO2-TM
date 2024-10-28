const db = require('../database/models');
const op = db.Sequelize.Op;

const indexController = {
  index: function (req, res) {

    let filtrado = {
      where: [{awards: 2}, {length: 120}],
      order: [["title", "DESC"]],
      limit: 2,
      offset: 1
    }

    db.Movie.findAll()
    .then((result) => {
      return res.render("movies", {listaPeliculas: result})
    })
    .catch((err) => {
      return console.log(err);
    });

  },
  detalle: function (req, res) {
    let id = req.params.idPelicula;

    let filtrado2 = {
      include: [
        {association: "genre"},
        {association: "actors"}] // alias de la rela
    }

    let filtrado = {
      include: {
        all: true,
        nested: true
      }
    }

   db.Movie.findByPk(id, filtrado)
   .then(function(results) {
      //return res.send(results)
       return res.render("detalleMovies", {movie: results})
   }).catch(function(err) {
      return console.log(err);
    ;
   });

  },
  showFormCreate: function (req, res) {
    return res.render("registerMovie");
  },
  search: function(req, res) {
   
    let qs = req.query.pelicula;

    let filtrado = {
      where: [{title: {[op.like]: `%${qs}%`}}]
    }

    db.Movie.findAll(filtrado)
    .then(function(results) {
      return res.send(results);
    }) // si todo sale bien
    .catch(function(err) {
      return console.log(err);
      
    }) // si todo sale mal

    
  },
  store:function (req,res) {
    let pelicula = req.body;
    //return res.send(pelicula)
    db.Movie.create(pelicula)
    .then(function (results) {
        return res.redirect("/movies");
    })
    .catch(function (err) {
      console.log(err);
      
    })
    
    
  },
  showFormUpdate:function (req,res) {
    let id = req.params.id;
    db.Movie.findByPk(id)
    .then(function (result) {
      return res.render("updateMovie",{movie:result})
    })
    .catch(function (err) {
      console.log(err);
      
    })
   
  },
  update:function (req,res) {
    let newInfo = req.body;
    let id = req.body.id;
    let filtrado={where: [{id: id}]}
    db.Movie.update(newInfo,filtrado)
    .then(function (result) {
      return res.redirect("/movies")
    })
    .catch(function (err) {
      console.log(err);
      
    })
    
  }


};

module.exports = indexController;
