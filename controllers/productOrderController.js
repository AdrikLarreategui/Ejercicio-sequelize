const { ProductsOrder } = require('../models/index.js')
const ProductOrderController  = {
    create(req, res) {
       const { orderId, productId, quantity } = req.body

       ProductsOrder.create({
        orderId, 
        productId, 
        quantity
       })
       .then(productOrder => res.status(201).send({ message: 'Relación creada con éxito', productOrder }))
       .catch(error => {
        console.error(error)
        res.status(500).send('Error al crear la relación')
       })
    }
}

module.exports = ProductOrderController