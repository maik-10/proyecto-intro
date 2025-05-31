// script.js

// Funcionalidad 1: Mensaje de bienvenida personalizado al cargar la página
window.onload = function() {
    console.log("¡La página 'NBA Inspiradora' ha cargado completamente!");
    if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) { 
        alert("¡Bienvenido/a a 'NBA Inspiradora'! Prepárate para conocer historias que trascienden el baloncesto.");
    };
};
// Funcionalidad 2: Resaltar la tarjeta del jugador al que se le haga clic (y volver al estado original)
const tarjetasjugadores = document.querySelectorAll('.tarjeta-jugador');

tarjetasjugadores.forEach(card => {
    card.addEventListener('click', function() {
        tarjetasjugadores.forEach(c => c.classList.remove('active'));
        this.classList.add('active');

    });
});

// Funcionalidad 3: Cambiar el color del título principal al pasar el mouse y volver al original
const mainHeaderTitle = document.querySelector('header h1');

if (mainHeaderTitle) {
    mainHeaderTitle.addEventListener('mouseover', function() {
        this.style.color = '#ffc107'; 
        this.style.cursor = 'pointer';
    });

    mainHeaderTitle.addEventListener('mouseout', function() {
        this.style.color = 'white';
        this.style.cursor = 'default';
    });
}
