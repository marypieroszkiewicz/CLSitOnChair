document.addEventListener('DOMContentLoaded', function() {  

/* ---------------------------------------------------- */
/* ----- TOGGLE SUBMENU ----- */
/* ---------------------------------------------------- */

	const submenuToggle = document.querySelector('.menu__item');
    const submenu = document.querySelector('.submenu');
    submenuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        submenu.classList.toggle('open--submenu');
    });


});