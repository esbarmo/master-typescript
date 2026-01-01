// Seleccionar elementos con ID
// Seleccionar elementos con una CLASE

//let contenedor = document.getElementById("contenedor");
let contenedores = document.querySelectorAll(".container");

//contenedores.forEach((elemento, indice ) => {
for(indice in contenedores) {

    contenedores[indice].innerText = `Hola soy un texto ${indice} desde JS`;
    contenedores[indice].className = "ficha";

    if(parseInt(indice) === 2) {
        contenedores[indice].style.backgroundColor = "pink";
    }
}
//});

console.log(contenedores);