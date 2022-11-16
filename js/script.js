// Tipos de variables (string, numérica)
var num1 = "2";
var num2 = 2;
var num3 = 10;

console.log(num1 + num3);
console.log(num2 + num3);
console.log("Sumas");


// Pestaña Voluntariado
function pedirNombre(){
    var nombreVoluntario = prompt("Danos tu nombre y apellido porfa :)");
    document.getElementById("gracias").innerHTML = "Gracias " + nombreVoluntario + " por anotarte!";
//    alert("Tus datos fueron recibidos con éxito");
    console.log("Bienvenidx " + nombreVoluntario);
}

function cambiarColor(){
    var colorcito = prompt("Qué color te gustaría?");
    document.getElementById("textoLorem").style.color = colorcito;
}

function sumamePatitas(){
    let patita1 = document.getElementById("patita1");
    patita1.style.display = "flex";

    let patita2 = document.getElementById("patita2");
    patita2.style.display = "flex";

    let tituloConPatitas = document.getElementsByTagName("h1")[0];
    tituloConPatitas.style.margin = "auto 1vw";
}


// Pestaña Donaciones
// (A) Pop-up y Cookies
setTimeout(aceptarCookies, 5000);

function aceptarCookies(){
    document.getElementById("cookies").getElementsByTagName("button")[0].style.display = "inline";
    document.getElementById("cookies").getElementsByTagName("button")[1].style.display = "inline";
}

var aceptaCookies = "";

function chauPopUpTrue(){
    document.getElementById("cookies").style.display = "none";
    aceptaCookies = true;
}

function chauPopUpFalse(){
    document.getElementById("cookies").style.display = "none";
    aceptaCookies = false;
    setTimeout(apareceDeNuevo, 10000);
    // setInterval(apareceDeNuevo, 10000);

    function apareceDeNuevo(){
    document.getElementById("cookies").style.display = "flex";
    }
}


// (B) Chequeo de Campos Form
function chequearCampos(){
    var nombreDonante = document.getElementById("nombreForm").value;
    var telDonante = document.getElementById("telForm").value;
    var mailDonante = document.getElementById("mailForm").value;
    var dineroDonante = document.getElementById("dineroForm").value;

    if (nombreDonante == ""){
        alert("Por favor llenar con su nombre");
    } else if (telDonante == ""){
        alert("Por favor llenar con su telefono");
    } else if (mailDonante == ""){
        alert("Por favor llenar con su email");
    } else if (dineroDonante == ""){
        alert("Por favor llenar con el dinero");
    }

}

// Pestaña Nuestro Refugio
let primerBoton = document.getElementById("primerBoton");
let primerImg = document.getElementById("muchachos");

primerBoton.onclick = () => {
    primerImg.style.animationName = "primerbyn";
    setTimeout(removerEstilo, 15000);
    function removerEstilo(){
        primerImg.style.animationName = "";
    }
}

let segundoBoton = document.getElementById("segundoBoton");
let segundaImg = document.getElementById("refu");

segundoBoton.addEventListener("click", cambioByN)
function cambioByN(){
    segundaImg.style.animationName = "segundobyn";
    setTimeout(removerEstilo, 15000);
    function removerEstilo(){
        segundaImg.style.animationName = "";
    }
}

// Pestaña Nuestro Refugio
