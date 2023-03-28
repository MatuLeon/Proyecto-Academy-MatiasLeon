let contenedorExp = document.getElementById ("contenedorExp")

let anadirExp = document.getElementById ("anadirExp")

//evento experiencia, no logre que pueda repetir más de 1 evento

    anadirExp.addEventListener("click", ()=>{
        contenedorExp.innerHTML += `
        <div class="containerExperience__body">
    
            <div class="userExp">
                Cargo
                <input type="text">
            </div>
    
            <div class="userExp">
                Fecha de inicio
                <input type="text">
            </div>
    
            <div class="userExp">
                Fecha de finalización
                <input type="text">
            </div>
    
            <div class="userExp">
                Tareas a cargo
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
    
        </div>

        <input type="button" value="Añadir" class="anadirExp" id="anadirExp">

        `
    })


