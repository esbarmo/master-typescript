// String
let nombre = "Estela Barceló";

// Number
let numero = 14;
let decimal = 3.2;

// Boolean / booleano
let mayor_edad = true;
let menor_edad = Boolean(0) // 1 es true, 0 es false;

// Array
let paises = ["España", "México", "Colombia", "Argentina"];

// Null
let vacio = null;

// Undefined
let no_definido = undefined;

/*console.log(typeof nombre,
    typeof numero,
    typeof decimal,
    typeof mayor_edad,
    typeof menor_edad,
    typeof paises,
    typeof(paises[1]),
    typeof vacio,
    typeof no_definido
);*/

// JSON - Javascript Object Notation - Objetos literales
let film = {
    title: "Alcarràs",
    genre: "Ficción",
    year: 2022,
    director: "Carla Simón",
    show: function() {
        return `
        ***** LA PELÍCULA DE LA SEMANA ***** \n
        Título: ${this.title}
        Género: ${this.genre}
        Año: ${this.year}
        Director: ${this.director} 
        `
    }
}

film["country"] = "España";
delete film['director'];
film.genre = null;

console.log("title" in film)

for(let property in film) {
    let currentData = film[property];
    if(currentData !== null && typeof(currentData) !== "function") {
        console.log(currentData);
    }
}

// Symbol
let animal = Symbol("tigre");
let animal2 = Symbol("tigre");

let user = {
    id: 1,
    nombre: "Estela Barceló",
    email: "estelabarcelo_34@hotmail.com" 
 }

let supercalifragilistico = Symbol('id');
user[supercalifragilistico] = 7;

console.log(user.id, user[supercalifragilistico]);