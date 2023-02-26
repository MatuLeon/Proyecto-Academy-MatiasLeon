const nombre = document.querySelector("#userName");
const apellido = document.querySelector("#userSurname");
const documentoNacional = document.querySelector("#userID");
const nacionalidad = document.querySelector("#userNacionality");
const phoneNumber = document.querySelector("#userMobile");
const email = document.querySelector("#userEmail");
const form = document.querySelector(".form");
const list_Inputs = document.querySelectorAll(".input-form");



form.addEventListener("submit", (e) =>{
    e.preventDefault();
    if(nombre.value.lenght < 1 || nombre.value.trim() ==""){
        let entrada = document.getElementById(".mensajeError");
        entrada.innerHTML = "Nombre no valido";
    }

    if(apellido.value.lenght < 1 || nombre.value.trim() ==""){
        console.error("Error")
    }
})

