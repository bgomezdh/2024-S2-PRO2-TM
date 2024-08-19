const usersController = {
    index: (req, res) => {
        res.send('hola desde la ruta de usuarios');
      },
    saludar: (req, res) => {
        res.send('hola a todos');
      }
}

module.exports = usersController;