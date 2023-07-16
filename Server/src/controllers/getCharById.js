var axios = require("axios")

function getCharById(res, id){
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({data}) => {
        if (data.id == id){   
            const char = {
                id: id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image,
                status: data.status,
            }
            res
            .writeHead(200, {"content-type" : "application/json" })
            .end(JSON.stringify(char))
        }
    }).catch((error) => {
        
        res
        .writeHead(404, {"content-type" : "text/plain"})
        .end(error.response.data.error)

    })
}

module.exports = {getCharById}