export default function validation(userData){
    let error = {}
 if(!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(userData.username)){
    error.username= "el email es invalido" 
}

if (!userData.username){
    error.username = "este campo no puede estar vacio"
}

if(userData.username.length > 35){
    error.username = "el email no puede superar los 35 carácteres"           
}

if(!userData.password.match(/\d/)){
    error.password = "la contraseña debe contener al menos 1 numero"
}

if(userData.password.length < 6 && userData.password.length > 10){
    error.password= "la contraseña debe de tener entre 6 y 10 caracteres"
}

return error;

}