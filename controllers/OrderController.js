const { Order } = require('../models/index.js')
const OrderController = {
    create (req, res) {
        const { orderDate, totalAmount, userId } = req.body

        Order.create({
            orderDate,
            totalAmount,
            userId
        })
        .then(order => res.status(201).send({ message: 'El pedido se ha creado con éxito', order }))
        .catch(error => {
            console.error(error)
            res.status(500).send('Error al crear el pedido')
        })
    }
}

module.exports = OrderController