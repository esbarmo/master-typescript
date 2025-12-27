// Definir una variable en typescript
let minombre = "Estela";
let web = "dominio.com";
let numero = 2;
let verdadero = true;
let cualquier = "lo que sea";
verdadero = false;
// Constantes
const nombre = "Estela Platea";
console.log(cualquier, numero, verdadero);
console.log("Mi nombre es: ", minombre, web);
console.log("Mi nombre es: ", minombre, web);
console.log("Mi nombre es: ", minombre, web);
console.log("Hola desde dentro de src");
// Arrays
let personas = ["Sertan", "Bassem", "Ivona", "Erick"];
let div_personas = document.querySelector("#personas");
div_personas.innerHTML = "<ul>" +
    personas.map((persona) => {
        return `<li>${persona}</li>`;
    }).join("");
+"</ul>";
