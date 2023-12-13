const { Product } = require('../models/index.js')
const ProductController = {
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