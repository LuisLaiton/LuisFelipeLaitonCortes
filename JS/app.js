const $DIPLOMA = document.querySelectorAll(".certificado");

$DIPLOMA.forEach(element => {
    element.onclick = diploma;
});

function diploma(event) {

    event.preventDefault();
    const $CERTIFICADO = event.currentTarget.querySelector(".d-oculto");
    $CERTIFICADO.classList.toggle('d-mostrar');
}
