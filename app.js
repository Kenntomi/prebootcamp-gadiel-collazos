const boton = document.getElementById('btnSaludar');
const saludo = document.getElementById('saludo');
const nombreInput = document.getElementById('nombre');
boton.addEventListener('click', function() {
    const nombre = nombreInput.value;
    saludo.textContent = "Hola " + nombre + ", bienvenido a PreBootCamp!";
});