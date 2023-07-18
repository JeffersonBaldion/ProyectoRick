const cors = require('cors')
const morgan = require('morgan')

const characterRouter = require('./routes/characters')
const favoriteRouter = require('./routes/favorites')

const express = require('express')
const server = express()

const PORT = 3001

server.use(express.json())
server.use(morgan('dev'))
server.use(cors())

server.use('/characters', characterRouter)
server.use('/favorites', favoriteRouter)


server.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})

