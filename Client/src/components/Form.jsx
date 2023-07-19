import React from "react";
import Validation from "./validation";
import Styles from './modulesCSS/Form.module.css'

export default function Form(props){
    const [userData, setUserData] = React.useState({
        email: "",
        password:"",
    }
    )

    const [errors, setErrors] = React.useState({})

    const handleChange = event => {
        const {name, value} = event.target;
        setUserData({
            ...userData, [name]: value
        }
        )
        setErrors(Validation({
            ...userData, [name] : value
        }))
    }

    const handleSubmit = event =>{
        event.preventDefault();
        props.login(userData)
    }

    return (
        <div className={Styles.imagen}>
            <form onSubmit={handleSubmit}  className={Styles.form}>
                <div><label>Email: </label>
                    <input
                        placeholder="Email..."
                        type={"text"}
                        name="email"
                        value={ userData.email }
                        onChange={handleChange}
                        />
                    <p>{errors.email ? errors.email : null}</p>
                </div>
                <div><label>Password: </label>
                    <input
                        placeholder="password..."
                        type={"password"}
                        name="password"
                        value={ userData.password }
                        onChange={handleChange}
                        />   
                    <p>{errors.password ? errors.password : null}</p>
                </div> 
                <hr/>
                <button type="submit">Submit</button>    
            </form>
    


        </div>
    )
}