export default function Validation(input){
    const errors = {};
    const regexEmail = /\S+@\S+\.\S+/;
    const regexPassword = new RegExp("[0-9]");

    if(!regexEmail.test(input.email)){
        errors.email = "Debe ingresar un Email válido!"
    }

    if(!input.email){
        errors.email = "Debe ingresar un Email"
    }

    if(input.email.length > 35){
        errors.email = "El email debe de tener menos de 35 caracteres"
    }

    if(!regexPassword.test(input.password)){
        errors.password = "La contraseña debe tener al menos un número"
    }

    if(input.password.length < 6 || input.password.length > 10 ){
        errors.password = "La Contraseña debe ser mayor a 6 y menor a 10"
    }

    return errors;
}