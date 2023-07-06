const $DIPLOMA = document.querySelectorAll(".certificado");

$DIPLOMA.forEach(element => {
    element.onclick = diploma;
});

function diploma(event) {

    event.preventDefault();
    const $CERTIFICADO = event.currentTarget.querySelector(".diploma");
    $CERTIFICADO.classList.toggle('diploma--mostrar');
}
