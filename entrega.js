const validarClave = (clave) =>{
    if (clave.length < 5){
        return true
    } 
    else{
        return false
    }
}
function datosUsuario(){
  const usuarioDato = document.getElementById("usuarioDato");
  const nombreUsuario = usuarioDato.value;
}
function claveDelUsuario(){
  const clave = document.getElementById(claveDelUsuario);
  const claveUsuario = clave.value;
}

function agregarUsuario(usuario,nombre, apellido, edad,mail,clave) {
  usuarios[usuario] = {

    clave: contraseña,
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    mail: mail,
  };
}

agregarUsuario("TitoelSanchez45","Alberto","Sanchez",45,"TitoSanchez@gmail.com","654321");

function verificarCredenciales(usuarioIngresado, claveIngresada) {
  const usuario = usuarios[usuarioIngresado];
  return usuario && usuario.clave === claveIngresada;
}

const usuarioIngresado = "TitoelSanchez45";
const claveIngresada = "654321";

if (verificarCredenciales(usuarioIngresado, claveIngresada)) {
  console.log("Inicio de sesión exitoso");
} else {
  console.log("Error: Datos incorrectos");
}

let parrafo = document.getElementById("Parrafo");
console.log(parrafo.innerHTML);

$(document).ready(
  function() {
  $("h1").text("");
});

const apiUrl = 'https://trefle.io/api/v1/plants/search?token=TU_API_KEY&q=rose';
 fetch(apiUrl)
.then(response => {
 
    if (!response.ok) {
        throw new Error(`Error de red: ${response.status}`);
    }
    return response.json();
})
  






 





