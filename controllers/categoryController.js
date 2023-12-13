const { Category } = require ('../models/index.js')

const CategoryController = {
    create(req, res) {
        const { categoryName, description } = req.body
    
    Category.create({
        categoryName, 
        description,
    })
        .then(category => res.status(201).send({ message: 'Categoría creada con éxito', category }))
        .catch(error => {
            console.error(error)
            res.status(500).send('Error al crear la categoría')
        })
    }
}

module.exports = CategoryController