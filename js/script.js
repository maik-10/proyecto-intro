// script.js

// Funcionalidad 1: Mensaje de bienvenida personalizado al cargar la página
window.onload = function() {
    console.log("¡La página 'NBA Inspiradora' ha cargado completamente!");
    if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
        alert("¡Bienvenido/a a 'NBA Inspiradora'! Prepárate para conocer historias que trascienden el baloncesto.");
    // Puedes hacer que esta alerta solo aparezca en la página de inicio
    // if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
    //     alert("¡Bienvenido/a a 'NBA Inspiradora'! Prepárate para conocer historias que trascienden el baloncesto.");
    // }
};

// Funcionalidad 2: Resaltar la tarjeta del jugador al que se le haga clic (y volver al estado original)
const jugadorCards = document.querySelectorAll('.jugador-card');

jugadorCards.forEach(card => {
    card.addEventListener('click', function() {
        // Quitamos la clase 'active' de todas las tarjetas primero
        jugadorCards.forEach(c => c.classList.remove('active'));

        // Añadimos la clase 'active' a la tarjeta clickeada
        this.classList.add('active');

        // Opcional: Mostrar un mensaje en consola sobre el jugador clickeado
        const nombreJugador = this.querySelector('h2').textContent.split(':')[0].trim();
        console.log(`Se ha hecho clic en la tarjeta de: ${nombreJugador}`);
    });
});

// Funcionalidad 3: Cambiar el color del título principal al pasar el mouse y volver al original
const mainHeaderTitle = document.querySelector('header h1');

if (mainHeaderTitle) {
    mainHeaderTitle.addEventListener('mouseover', function() {
        this.style.color = '#ffc107'; // Cambiar a amarillo al pasar el mouse
        this.style.cursor = 'pointer'; // Indicar que es interactivo
    });

    mainHeaderTitle.addEventListener('mouseout', function() {
        this.style.color = 'white'; // Volver al blanco original
        this.style.cursor = 'default';
    });
}
