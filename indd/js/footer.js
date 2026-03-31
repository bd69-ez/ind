document.addEventListener('DOMContentLoaded', function() {
    const anioActual = new Date().getFullYear();
    const mensaje = "© " + anioActual + " Fraga Games | Benjamín Fraga, Director General. Todos los derechos reservados.";
    const elementoFooter = document.getElementById('mensaje-footer');
    if (elementoFooter) {
        elementoFooter.textContent = mensaje;
    }
});