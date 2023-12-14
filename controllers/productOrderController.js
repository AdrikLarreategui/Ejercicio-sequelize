const { ProductsOrder } = require('../models/index.js')
const ProductOrderController  = {
    findAll(req, res) {
        Product.findAll()
          .then(Product => res.status(200).json(Product))
          .catch(error => {
            console.error(error);
            res.status(500).send('Error al obtener relaciones');
          });
      },
      findById(req, res) {
        Product.findByPk(req.params.id)
          .then(Product => res.status(200).json(Product))
          .catch(error => {
            console.error(error);
            res.status(500).send('Error al obtener relaciones');
          });
      },
      findByName(req, res) {
        Product.findByName(req.params.productName)
          .then(Product => res.status(200).json(Product))
          .catch(error => {
            console.error(error);
            res.status(500).send('Error al obtener relaciones');
          });
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