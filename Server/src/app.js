const cors = require('cors')
const morgan = require('morgan')

const characterRouter = require('./routes/characters')
const favoriteRouter = require('./routes/favorites')
const userRouter = require('./routes/user')

const express = require('express')
const server = express()



server.use(express.json())
server.use(morgan('dev'))
server.use(cors())

server.use('/characters', characterRouter)
server.use('/favorites', favoriteRouter)
server.use('/', userRouter)

module.exports = server

