const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const expresionRegular = /^(?=.{1,35}$).+/;

const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;

export function validation(data){
    const errors ={}

        if(!regexEmail.test(data.email)) 
        errors.email = "Debe ser un email";
        if(!expresionRegular.test(data.email)) 
        errors.email = "La longitud debe de ser menor a 36";
        if (!regexPassword.test(data.password))
        errors.password = 'La contraseña debe de tener al menos un numero, una mayuscula y ser de entre 6 y 10 caracteres'; 
        
        return errors;


}