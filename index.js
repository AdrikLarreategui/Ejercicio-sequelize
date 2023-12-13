const express = require ('express')
const app = express()
const PORT = 3000

app.use(express, json())
app.use('/users', require('./routes/users'))
//Pendiente hacer unión entre product product route, etc.

app.listen(PORT, ()=> console.log(`Server created at port ${PORT}`))