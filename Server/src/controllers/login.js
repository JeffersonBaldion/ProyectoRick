const allowedUser = require('../utils/allowedUser')

function login (req,res){
    const {email, password} = req.query;
    let access = false;

    allowedUser.forEach(user => {
        if(user.email === email && user.password === Number(password)){
            access = true
        }
    });
    
    return res.status(200).json({access})
}

module.exports = login