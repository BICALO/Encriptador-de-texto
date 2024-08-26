
function encriptar() {
let texto = document.getElementById("texto").value;
let tituloMensaje = document.getElementById("titulo__mensaje");
let niñoconlupa = document.getElementById("niñoConLupa");
let parrafo = document.getElementById("parrafo");
let textoDesencriptado= document.getElementById("texto__derecho");
let textoCifrado = texto
           .replace(/e/gi, "enter")
           .replace(/i/gi, "imes")
           .replace(/a/gi, "ai")
           .replace(/o/gi, "ober")
           .replace(/u/gi, "ufat")

if (texto.length !=0) {
    document.getElementById("texto__derecho").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado";
    textoDesencriptado.hidden = false
    niñoconlupa.src = "./img/encriptado.png";
    parrafo.textContent = "";

} else {

    niñoconlupa.src = "./img/niñoconlupa.png";
    tituloMensaje.textContent = "Ningun mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que quieres encriptar o desencriptar";

    alert("Debes ingresar un texto");
}}

function desencriptar() {

    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo__mensaje");
    let niñoconlupa = document.getElementById("niñoConLupa");
    let parrafo = document.getElementById("parrafo");
    let textoCifrado= texto
           .replace(/enter/gi, "e")
           .replace(/imes/gi, "i")
           .replace(/ai/gi, "a")
           .replace(/ober/gi, "o")
           .replace(/ufat/gi, "u")

if (texto.length !=0) {
    document.getElementById("texto__derecho").value = textoCifrado;
    tituloMensaje.textContent = "Texto desencriptado";
    niñoconlupa.src = "./img/desencriptado.png";
    parrafo.textContent = "";
} else {

    niñoconlupa.src = "./img/niñoconlupa.png";
    tituloMensaje.textContent = "Ningun mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que quieres encriptar o desencriptar";

    alert("Debes ingresar un texto");

}
}

async function copiarTexto() {

    let textoACopiar = document.getElementById("texto__derecho").value;
    let tempInput = document.createElement("input");
    let tituloMensaje = document.getElementById("titulo__mensaje");
    let niñoconlupa = document.getElementById("niñoConLupa");

    if (textoACopiar.length !=0){
        await navigator.clipboard.writeText(textoACopiar);
        tituloMensaje.textContent = "Texto copiado con exito";
        niñoconlupa.src = "./img/textocopiar.png";
        parrafo.textContent = "";
    } else{

        niñoconlupa.src = "./img/niñoconlupa.png";
        tituloMensaje.textContent = "Debes ingresar un texto a copiar";
    }
}
 