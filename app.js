// Función para recibir y asignar texto a un placeholder
function recibirTexto(elemento, texto) { 
    const inputElemento = document.querySelector(elemento);
    inputElemento.placeholder = texto;
}

// Función para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto) { 
    const elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

// Configuración inicial al cargar la página
function condicionesIniciales() {
    recibirTexto('.presentacion__texto', 'Ingrese el texto aquí');
    asignarTextoElemento('.presentacion__digitar__texto__advertencia__texto', 'Solo letras minúsculas y sin acentos');
    asignarTextoElemento('.titulo__inicio__encriptado', 'Ningún mensaje fue encontrado');
    asignarTextoElemento('.texto__inicio__encriptado', 'Ingresa el texto que desees encriptar o desencriptar.');
}

// Función para encriptar el texto
function encriptar() {
    let textoUsuario = document.querySelector('#tomar__texto').value.toLowerCase();
    textoUsuario = textoUsuario.replace(/[^a-z\s]/g, '');

    if (!textoUsuario) {
        alert('No ingresó una palabra o texto');
    } else {
        const textoEncriptado = reemplazarVocales(textoUsuario);
        document.querySelector(".texto__inicio__encriptado").innerText = textoEncriptado;

        limpiarTextArea();
        desaparecerImagen();
        actualizarComponentes();       
    }
}

// Función para desencriptar el texto
function desencriptar() {
    let textoUsuario = document.querySelector('#tomar__texto').value.toLowerCase();
    textoUsuario = textoUsuario.replace(/[^a-z\s]/g, '');

    if (!textoUsuario) {
        alert('No ingresó una palabra o texto o de click en el botón copiar');
    } else {
        const textoDesencriptado = reemplazarVocalesInversa(textoUsuario);
        document.querySelector(".texto__inicio__encriptado").innerText = textoDesencriptado;

        limpiarTextArea();
        desaparecerImagen();
        actualizarComponentes();
    }
}

// Función para reemplazar vocales con secuencias específicas (encriptar)
function reemplazarVocales(value) {
    return value.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

// Función para reemplazar secuencias específicas con vocales (desencriptar)
function reemplazarVocalesInversa(text) {
    return text.replace(/enter/g, "e")
               .replace(/imes/g, "i")
               .replace(/ai/g, "a")
               .replace(/ober/g, "o")
               .replace(/ufat/g, "u");
}

// Función para limpiar el textarea
function limpiarTextArea() {
    document.querySelector('#tomar__texto').value = '';
}

// Función para desaparecer la imagen
function desaparecerImagen() {
    const imagen = document.querySelector('.imagen__inicio__encriptado');
    if (imagen) {
        imagen.style.display = 'none';
    }
}

// Función para actualizar componentes de la interfaz
function actualizarComponentes() {
    const titulo = document.querySelector('.titulo__inicio__encriptado');
    titulo.style.display = 'none';

    const texto = document.querySelector('.texto__inicio__encriptado');
    texto.style.fontSize = '24px';

    const caja = document.querySelector('.contenido__inicio__encriptado');
    caja.style.width = '336px';
    caja.style.height = '781px';
    caja.style.padding = '32px';
    caja.style.textAlign = 'left';
    caja.style.position = 'relative';

    const botonCopiar = document.querySelector('.container__boton__copiar');
    botonCopiar.style.display = 'block';
}

// Evento para copiar el texto encriptado y colocarlo en el textarea
document.querySelector('.container__boton__copiar').addEventListener('click', function () {
    const encryptedText = document.querySelector('.texto__inicio__encriptado').innerText;

    navigator.clipboard.writeText(encryptedText).then(() => {
        console.log('Texto encriptado copiado al portapapeles');
        document.querySelector('#tomar__texto').value = encryptedText;
        document.querySelector('.texto__inicio__encriptado').innerText = '';
    }).catch(err => {
        console.error('Error al copiar el texto:', err);
    });
});

// Ejecutar configuración inicial
condicionesIniciales();

