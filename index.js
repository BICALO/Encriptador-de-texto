function encriptar() {
let texto = document.getElementById("texto").value;
let tituloMensaje = document.getElementById("titulo__mensaje");
let parrafo = document.getElementById("parrafo");
let muñeco = document.getElementById("muñeco");

let textoCifrado = texto
           .replace(/e/gi, "enter")
           .replace(/i/gi, "imes")
           .replace(/a/gi, "ai")
           .replace(/o/gi, "ober")
           .replace(/u/gi, "ufat")

if (document.getElementById("texto").value.length !=0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con exito";
    parrafo.textContent = "";
   niñoconlupa.src = "./img/encriptado.png";
} else {

    niñoconlupa.src = "./img/niñoconlupa.png";
    tituloMensaje.textContent = "Ningun mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que quieres encriptar o desencriptar";

    alert("Debes ingresar un texto");
}}