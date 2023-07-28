const express = require("express");
const postFav = require('../controllers/postFav')
const deleteFav = require('../controllers/deleteFav')
const getFav = require('../controllers/getFav')

const favoriteRouter = express.Router();

favoriteRouter.get("/", getFav);
favoriteRouter.post("/", postFav);
favoriteRouter.delete("/:id", deleteFav);

module.exports = favoriteRouter;
