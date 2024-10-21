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

    db.Movie.findAll(filtrado)
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
      return res.send(results)
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
      ;
    }) // si todo sale mal

    
  }

};

module.exports = indexController;
