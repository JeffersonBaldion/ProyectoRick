const { conn } = require('./DB_connection');
const server = require('./app')
const PORT = 3001


server.listen(PORT, ()=>{
    conn.sync({force: false})
    console.log(`Server running on port ${PORT}`)
})

