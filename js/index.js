const nombre = document.querySelector("#userName");
const apellido = document.querySelector("#userSurname");
const documentoNacional = document.querySelector("#userID");
const nacionalidad = document.querySelector("#userNacionality");
const phoneNumber = document.querySelector("#userMobile");
const email = document.querySelector("#userEmail");
const experience = document.querySelector("#experience");
const tasks_experience = document.querySelector("#tasksJobs");
const habilities = document.querySelector("#habilities");
const form = document.querySelector(".form");
const T_and_C = document.querySelector("#thermsAndConditions");
const list_Inputs = document.querySelectorAll(".input-form");



form.addEventListener("submit", (e) =>{
    e.preventDefault();
    let condition = validacionForm();
    if (condition == true){
        enviarFormulario();
    }
});


function validacionForm(){
    let condition = true;
    list_Inputs.forEach(entrada =>{
        entrada.lastElementChild.innerHTML = "";
    })

    if(nombre.value.lenght < 1 || nombre.value.trim() ==""){
        mostrarMensajeError("userName", "*Campo obligatorio");
        condition = false;
    }

    if(apellido.value.lenght < 1 || nombre.value.trim() ==""){
        mostrarMensajeError("userSurname", "*Campo obligatorio");
        condition = false;

    }

    if (documentoNacional == isNaN || documentoNacional.value.lenght < 8 || documentoNacional.value.trim() ==""){
        mostrarMensajeError ("userID", "*Campo obligatorio")
        condition = false;
    }


    if (nacionalidad.value.lenght < 1 || nacionalidad.value.trim() ==""){
        mostrarMensajeError ("userNacionality", "*Campo obligatorio")
        condition = false;
    }
    
    if (phoneNumber.value.lenght < 1 || phoneNumber == isNaN || phoneNumber.value.trim() ==""){
        mostrarMensajeError ("userMobile", "*Campo obligatorio")
        condition = false;
    }

    if (email.value.lenght < 1 || email.value.trim() ==""){
        mostrarMensajeError ("userEmail" , "*Campo obligatorio")
        condition = false;
    }

    if (!T_and_C.checked){
        mostrarMensajeError("thermsAndConditions", "Acepte terminos y condiciones")
        condition = false;
    } else {
        mostrarMensajeError("thermsAndConditions", "")
    }

    return condition;
}

function mostrarMensajeError(claseInput, mensaje){
    let entrada = document.querySelector(`.${claseInput}`);
    entrada.lastElementChild.innerHTML = mensaje;
}


function enviarFormulario(){
    form.reset();
    form.lastElementChild.innerHTML = "¡Registro completado!"
}



