// Definir una variable en typescript
let minombre:string = "Estela";
let web:string = "dominio.com";
let numero:number = 2;
let verdadero:boolean = true;
let cualquier:any = "lo que sea";

verdadero = false;

// Constantes
const nombre:string = "Estela Platea"

console.log(cualquier, numero, verdadero);

console.log("Mi nombre es: ", minombre, web);
console.log("Mi nombre es: ", minombre, web);
console.log("Mi nombre es: ", minombre, web);
console.log("Hola desde dentro de src");

// Arrays
let personas:string[] = ["Sertan", "Bassem", "Ivona", "Erick"];

let div_personas:HTMLElement | null = document.querySelector("#personas");

div_personas.innerHTML = "<ul>" +

                            personas.map((persona) => {
                                return `<li>${persona}</li>`;
                            }).join("");

                        + "</ul>";