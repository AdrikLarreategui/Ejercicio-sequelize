const { User } = require('../models/index.js')
const UserController = {
    findAll(req, res) {
        User.findAll()
          .then(User => res.status(200).json(User))
          .catch(error => {
            console.error(error);
            res.status(500).send('Error al obtener relaciones');
          });
      },
    create(req, res) {
        req.body.role = "user"
        User.create(req.body)
        .then(user => res.status(201).send({ message: 'usuario creado con éxito', user}))
        .catch((err) => console.error(err))
    }
}

module.exports = UserController