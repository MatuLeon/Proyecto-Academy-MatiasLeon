
//Variables de educacion
let contenedorEstudio = document.getElementById ("contenedorEstudio")

let anadirEstudio = document.getElementById("anadirEstudio")



//evento educación, no logre que pueda repetir más de 1 evento onclick
anadirEstudio.addEventListener("click", ()=>{
    contenedorEstudio.innerHTML += `
    <div class="containerEducation" id="contenedorEstudio">

        <div class="userEducation">
            Entidad educativa
            <input type="text">
        </div>


        <div class="userEducation">
            Fecha de inicio
            <input type="date">
        </div>

        <div class="userEducation">
            Fecha de finalización
            <input type="date">
        </div>

        <div class="userEducation">
            Total de horas cursadas
            <input type="text">
        </div>

        <div class="userEducation">
            Titulo o certificado
            <input type="text" name="" id="">
        </div>

        <input type="button" value="Añadir" class="anadirEstudio" id="anadirEstudio2">
    </div>
    `

})



