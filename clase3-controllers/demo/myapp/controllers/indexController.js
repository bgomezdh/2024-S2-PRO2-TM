const indexController = {
    /* tengo que hace la cantidad de funcones que tenga mi ruteador */

    index: function(req, res) {
        return res.render('index', {title : 'Brian'})
    }
};

module.exports = indexController