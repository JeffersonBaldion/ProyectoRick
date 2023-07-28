const {Favorite} = require('../DB_connection')

const getFav = async(req, res) => {
    try {
        const favorites = await Favorite.findAll()

        res.status(200).json(favorites)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = getFav