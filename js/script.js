function pedirNombre(){
    var nombreVoluntario = prompt("Danos tu nombre y apellido porfa :)");
    document.getElementById("gracias").innerHTML = "Gracias " + nombreVoluntario + " por anotarte!";
//    alert("Tus datos fueron recibidos con éxito");
    console.log("Bienvenidx " + nombreVoluntario);
}

var num1 = "2";
var num2 = 2;
var num3 = 10;

console.log(num1 + num3);
console.log(num2 + num3);
console.log("Sumas");

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