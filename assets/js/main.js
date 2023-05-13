let botonEnviar = document.getElementById("boton")



function mostrar(){
let nombre = document.getElementById("nombre").value 
let apellido = document.getElementById("apellido").value 
let correo = document.getElementById("email").value 
let motivo = document.getElementById("motivo").value 
let mensaje = document.getElementById("mensaje").value 

alert(`DE: ${nombre} ${apellido} (${correo})\n- ASUNTO: ${motivo}\n- MENSAJE:\n${mensaje}`)
}

botonEnviar.addEventListener("click",mostrar)