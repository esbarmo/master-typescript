let frutas = ["plátano", "melón", "fresa", "piña"];

// CLásico
//let platano = frutas[0];
//let melon = frutas[1];

// Desestructurar array
let [platano, melon, fresa, piña] = frutas;
//console.log(melon);

// Desestructurar objetos
/*
let persona = {
    nombre: "Estela",
    edad: 30,
    altura: 169,
    pais: "España"
};

let {nombre, edad, altura, pais} = persona;
*/

// Desestructurar string
let usuario = "Estela Barceló WEB 99999999G 05/11/1934 Madrid";
let [nombre, apellido1, apelido2, dni, fecha, ciudad] = usuario.split(" ");

// Crear varias variables
let lenguaje = "JS",
    framework = "Angular",
    editor = "VSC";

// Utilidad parámetros funciones
function mostrarUsuario({nombre = "", apellido = "", ciudad = "Madrid"}){
    console.log(nombre + " " + apellido + " " + ciudad);
}

mostrarUsuario({nombre: "Estela", ciudad: "Alicante"});