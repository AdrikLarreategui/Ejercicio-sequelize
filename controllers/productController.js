const { Product } = require('../models/index.js')
const ProductController = {
    findAll(req, res) {
        Product.findAll()
        .then(Product => res.status(200).json(Product))
        .catch(error => {
            console.error(error)
            res.status(500).send('Error al obtener las relaciones')
        })
    },
    findById(req, res) {
        Product.findByPk(req.params.id)
        .then(Product => res.status(200).json(Product))
        .catch(error => {
            console.error(error)
            res.status(500).send('Error al obtener las relaciones')
        })
    },
    findByName(req, res) {
        Product.findByName(req.params.productName)
        .then(Product => res.status(200).json(Product))
        .catch(error => {
            console.error(error)
            res.status(500).send('Error al obtener las relaciones')
        }) 
    },
    findByPrice(req, res) {
        Product.findByPrice(req.params.price)
          .then(Product => res.status(200).json(Product))
          .catch(error => {
            console.error(error);
            res.status(500).send('Error al obtener relaciones');
          });
      },
    create(req, res) {
        const { productName, price, categoryID } = req.body

        Product.create ({
            productName,
            price,
            categoryID 
        })
        .then(product => res.status(201).send({ message: 'El producto ha sido creado con éxito', product }))
        .catch(error => {
            console.error(error)
            res.status(500).send('Error al crear el producto')
        })
    }
}

module.exports = ProductController