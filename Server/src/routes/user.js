const  userRouter = require('express').Router()
const login = require('../controllers/login')

userRouter.get('/login', login)

module.exports = userRouter
