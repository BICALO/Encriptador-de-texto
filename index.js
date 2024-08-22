function encriptar() {
let texto = document.getElementById("texto").value;
let tituloMensaje = document.getElementById("titulo__mensaje");
let parrafo = document.getElementById("parrafo");
let niñoconlupa = document.getElementById("niñoConLupa");

let textoCifrado = texto
           .replace(/e/gi, "enter")
           .replace(/i/gi, "imes")
           .replace(/a/gi, "ai")
           .replace(/o/gi, "ober")
           .replace(/u/gi, "ufat")

if (document.getElementById("texto").value.length !=0) {
    document.getElementById("texto__derecho").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con exito";
    parrafo.textContent = "";
   niñoconlupa.src = "./img/encriptado.png";
} else {

    niñoconlupa.src = "./img/niñoconlupa.png";
    tituloMensaje.textContent = "Ningun mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que quieres encriptar o desencriptar";

    alert("Debes ingresar un texto");
}}

function desencriptar() {

    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo__mensaje");
    let parrafo = document.getElementById("parrafo");
    let niñoconlupa = document.getElementById("niñoConLupa");

    let textoCifrado= texto
           .replace(/enter/gi, "e")
           .replace(/imes/gi, "i")
           .replace(/ai/gi, "a")
           .replace(/ober/gi, "o")
           .replace(/ufat/gi, "u")

if (document.getElementById("texto").value.length !=0) {
    document.getElementById("texto__derecho").value = textoCifrado;
    tituloMensaje.textContent = "Texto desencriptado con exito";
    parrafo.textContent = "";
    niñoconlupa.src = "./img/desencriptado.png";
} else {

    niñoconlupa.src = "./img/niñoconlupa.png";
    tituloMensaje.textContent = "Ningun mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que quieres encriptar o desencriptar";

    alert("Debes ingresar un texto");

}
}

function copiarTexto() {

     let textocopiado =  document.getElementById("texto__derecho");
     let textoacopiar = textocopiado.textContent;

     copiarAlPortapapeles(texto__derecho)

}