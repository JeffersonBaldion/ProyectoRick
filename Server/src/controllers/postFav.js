const {Favorite} = require('../DB_connection')

const postfav = async(req, res) => {

    const {id, name, origin, status, image, species, gender} = req.body
    
    try {
        if(id && name && origin && status && image && species && gender){
            
            await Favorite.findOrCreate({where: {name: name}, defaults: {
                
                id: id,
                name : name,
                origin :origin,
                status : status,
                image :image,
                species :species,
                gender :gender
            }})
            const favorites = await Favorite.findAll()
            console.log(favorites)
            res.status(200).json(favorites)
        }else{
            res.status(401).send('Faltan datos')
        }

    } catch (error) {
        
        res.status(500).json(error)
    }
}

module.exports = postfav