const {User} = require('../DB_connection')
const {Op} = require('sequelize')

const login = async(req, res)=>{

    const {email, password} = req.query
   
    try {
        if(email && password){
            const checkEmail = await User.findOne({where: {email: email}})
            
            if(checkEmail){
                const checkUser = await User.findOne({where: [{email: email},{password:password}]})
                console.log(req.query)
                if(checkUser){
                    res.status(200).json({access: true})
                }else{
                    res.status(403).send('Contraseña incorrecta')
                }

            }else{
                res.status(404).send('Usuario no encontrado')
            }

        }else{
            res.status(400).send('Faltan datos')
        }

    } catch (error) {
        res.status(400).json(error)
    }

}

module.exports = login