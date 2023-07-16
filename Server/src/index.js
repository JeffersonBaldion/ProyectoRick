var http = require('http');
var {getCharById} = require("./controllers/getCharById")


const PORT = 3001

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes("/rickandmorty/character")){
        var id = req.url.split("/").at(-1);
        getCharById(res, id)
            
}}).listen(PORT, "localhost")