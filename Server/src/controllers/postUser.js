const {User} = require('../DB_connection')
const {Op} = require('sequelize')

const postUser = async(req,res) => {
    
    const {email, password} = req.body
        
    try {
        
        if(email && password){
            const created = await User.findOrCreate({where: {email: email}, defaults:{password:password}})
            res.status(200).json(created)
        }else{
            return res.status(400).send('Faltan datos')
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = postUser