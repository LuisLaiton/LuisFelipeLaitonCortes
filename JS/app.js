const $DIPLOMA = document.querySelectorAll(".mostrar--hover");
const $BTN_NAVBAR = document.querySelector(".navBar__menu-hamburguesa");
const $MENU_ENLACES = document.querySelector(".navBar__enlaces");
const $ENLACES = document.querySelectorAll(".navBar__item");

window.addEventListener('load', function() {
    document.querySelector('.header').classList.add('contenedor__visible');
});

$DIPLOMA.forEach(element => {
    element.onclick = diploma;
});

function diploma(event) {

    event.preventDefault();
    const $CERTIFICADO = event.currentTarget.querySelector(".d-oculto");
    $CERTIFICADO.classList.toggle('d-mostrar');
}

$BTN_NAVBAR.onclick = desplegar_menu;
$ENLACES.forEach(element => {
    element.onclick = check_ocultar;
});
// Función para desplegar/ocultar menú
function desplegar_menu() {
    $MENU_ENLACES.classList.toggle("navBar__enlaces--desplegable");

    $BTN_NAVBAR.querySelector("svg").remove()
    if ($MENU_ENLACES.classList.contains("navBar__enlaces--desplegable")) {
        $BTN_NAVBAR.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"/></svg>'
    } else {
        $BTN_NAVBAR.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor"d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" /></svg>'
    }
}

// Función para verificar y ocultar menú al hacer clic en un enlace
function check_ocultar() {
    if ($MENU_ENLACES.classList.contains("navBar__enlaces--desplegable")) {
        desplegar_menu();
    }
}