const { User, Post, Token } = require('../models/index.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { jwt_secret } = require('../config/config.json')['development']

const UserController = {
    findAll(req, res) {
        User.findAll()
          .then(user => res.status(200).json(user))
          .catch(error => {
            console.error(error);
            res.status(500).send('Error al obtener relaciones');
          });
      },
    
    create(req, res) {
      const{ name, email, password, role } = req.body;
      if(!name || !email  || !password) {
        return res.status(400).send('Completa todos los campos')
      }

      const hashedPassword = req.body.password ? bcrypt.hashSync(req.body.password, 10) : undefined
      if(hashedPassword === undefined) {
        return res.status(400).send('Contraseña requerida')
      }

    User.create({ name, email, password: hashedPassword, role })
    .then(user => res.status(201).send({ message: 'usuario creado con éxito', user}))
    .catch(error => {
      console.error(error)
      res.status(500).send('Error al crear el usuario')
    })
  },

  login(req,res){
    User.findOne({
        where:{
            email:req.body.email
        }
    }).then(user=>{
        if(!user){
            return res.status(400).send({message:"Usuario o contraseña incorrectos"})
        }
        const isMatch = bcrypt.compareSync(req.body.password, user.password)
        if(!isMatch){
            return res.status(400).send({message:"Usuario o contraseña incorrectos"})
        }
        let token = jwt.sign({ id: user.id }, jwt_secret);
          Token.create({ token, UserId: user.id });
          res.send({ message: 'Bienvenid@' + user.name, user, token })
    })
  },
  async deleteUSer(req, res) {
    const UserId = req.params.id
    try {
      const user = await User.findbyPK(UserId)
      if(!user) {
        return res.status(400).send({message:"Usuario no encontrado"})
      }
      await user.destroy()
      res.status(200).send('Usuario eliminado con éxito')
    } catch (error) {
      console.error(error)
      send.status(500).send('Error al eliminar el usuario')
    }
  },
  async logout(req, res) {
    try {
      await Token.destroy({
        where: {
          [Op.and]: [
            { UserId: req.user.id }, 
            { token: req.headers.authorization }
          ]
        }
      })
      res.send({ message: 'Desconectado con éxito'})
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'Hubo un problema al tratar de desconectarte' })
    }
  }
}


module.exports = UserController