const formRegister = document.getElementById("formRegister");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const plataform = document.getElementById("plataform");
const parrafo = document.getElementById("error");

formRegister.addEventListener("submit", e =>{
    e.preventDefault();
    
    let error = "";
    let validation = false;
    parrafo.innerHTML = "";
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(firstname.value == ''){
        error += `Debes completar el campo Nombre<br>`
        validation = true;
    }else if (firstname.value.length < 3){
        error += `El nombre debe contener 3 o más letras<br>`
        validation = true;
    }
    if(lastname.value == ''){
        error += `Debes completar el campo Apellido<br>`
        validation = true;
    }
    if(!regexEmail.test(email.value)){
        error += `El email ingresado no es valido<br>`
        validation = true;
    }
    if(plataform.value == 'default'){
        error += `Debes elegir una opción entre PC/PS4-PS5/XBOX<br>`
        validation = true;
    }
    
    if(validation){
        parrafo.innerHTML = error;
    }else{
        parrafo.innerHTML = "¡Registro completado!";
        formRegister.reset();
    }
})