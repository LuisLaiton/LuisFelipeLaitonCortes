const $DIPLOMA = document.querySelectorAll(".certificado__info");
const $SALIR_DIP = document.querySelector(".diploma__salir");

$DIPLOMA.forEach(element => {
    element.onclick = diploma;
});


function diploma(event) {
    console.log($SALIR_DIP)
    event.preventDefault();
    const $CERTIFICADO = event.currentTarget;

    // Variables dinámicas
    var imagePath = "../imagenes/certificaciones/" + $CERTIFICADO.getAttribute("id") + ".jpg";
    var captionText = $CERTIFICADO.querySelector("h3").textContent;

    // Crear el elemento figure
    var figure = document.createElement("figure");
    figure.classList.add("diploma");

    // Crear el elemento svg
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add("diploma__salir");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 0 256 256");

    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill", "#f66b0e");
    path.setAttribute("d", "M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z");

    svg.appendChild(path);

    // Crear el elemento img
    var img = document.createElement("img");
    img.classList.add("diploma__img");
    img.setAttribute("src", imagePath);
    img.setAttribute("alt", "certificado");

    // Crear el elemento figcaption
    var figcaption = document.createElement("figcaption");
    figcaption.classList.add("diploma__texto");
    figcaption.textContent = captionText;

    // Agregar los elementos al figure
    figure.appendChild(svg);
    figure.appendChild(img);
    figure.appendChild(figcaption);

    // Insertar el figure en el DOM
    var contenedor = document.querySelector(".certificados");
    contenedor.appendChild(figure);
}



$SALIR_DIP.onclick = diploma_salir;
console.log($SALIR_DIP)
function diploma_salir() {
    console.log($SALIR_DIP)
    const $FIG_DIPLOMA = document.querySelector(".diploma");
    $FIG_DIPLOMA.style.display = 'none';
}