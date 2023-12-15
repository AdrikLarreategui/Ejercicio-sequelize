const { Product } = require('../models/index.js')
const { Op } = require('sequelize')
const ProductController = {
    getAll(req, res) {
        Product.findAll()
        .then(products => res.status(200).json(products))
        .catch(error => {
            console.error(error)
            res.status(500).send('Error al obtener las relaciones')
        })
    },

    findById(req, res) {
        Product.findByPk(req.params.id)
        .then(products => res.status(200).json(products))
        .catch(error => {
            console.error(error)
            res.status(500).send('Error al obtener las relaciones')
        })
    },

    findByName(req, res) {
        const productName = req.params.productName
        Product.findByAll ({
            where: {
            productName: {
                [Op.like] : `%${productName}%`
                }
            }
        })
        .then(products => res.status(200).json(products))
        .catch(error => {
            console.error(error)
            res.status(500).send('Error al obtener el producto por nombre')
        }) 
    },

    findByPrice(req, res) {
        const { price } = req.params
        Product.findAll({
            where: {
                price:parseFloat(price)
            }
        })
          .then(products => res.status(200).json(products))
          .catch(error => {
            console.error(error);
            res.status(500).send('Error al obtener relaciones');
          });
      },
      async getAllWithCategory(req, res) {
        try {
          const productsWithCategories = await Product.findAll({
            include: [{
              model: Category,
              attributes: ["categoryName"],
            }],
          });
    
          res.status(200).json(productsWithCategories);
        } catch (error) {
          console.error(error);
          res.status(500).send('Error al obtener productos con categorías');
        }
      },
    
    async getAllOrdered(req, res) {
      try {
        const products = await Product.findAll({
          order: [['price', 'DESC']],
        });
        res.send(products);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message, stack: error.stack });
      }
    },

    create(req, res) {
        const { productName, price, categoryID } = req.body

        Product.create ({
            productName,
            price,
            categoryID 
        })
        .then(products => res.status(201).send({ message: 'El producto ha sido creado con éxito', products }))
        .catch(error => {
            console.error(error)
            res.status(500).send('Error al crear el producto')
        })
    }
}

module.exports = ProductController