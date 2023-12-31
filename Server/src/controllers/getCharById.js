var axios = require("axios")

const URL = "https://rickandmortyapi.com/api/character/"




const getCharById = async (req, res) => {
    const {id} = req.params
    try {
        const {data} = await axios(`${URL}${id}`)
        return res.json(data)
    } catch (error) {
        res.status(404).json(error.message)
    }
}




//     const {id} = req.params;
//     axios(`${URL}${id}`)
//     .then(({data}) => {
//         if(data.error){
//             return res.status(404).send(data.error)
//         }
//         var character = {
//             id: data.id,
//             name: data.name,
//             status: data.status,
//             species: data.species,
//             origin: data.origin,
//             image: data.image,
//             gender: data.gender
//         }
//         return res.status(200).json(character)
//     }).catch(error => {
//         return res.status(500).send(error.message)
//     })
// }
    

module.exports = {getCharById}