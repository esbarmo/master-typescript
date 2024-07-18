// EcmaScript 2021 / EA12 / ES.NEXT

// Variables: var, let, const
// Contenedor de información, caja para guardar un dato

// VAR: ámbito global o funcional
var nombre = 'Estela Barceló WEB';

function mostrarNombre() {
    nombre = 'Víctor';
    var apellidos = 'Robles';
    /*console.log('Dentro:', nombre);
    console.log('Dentro:', apellidos);*/
}

mostrarNombre();
//console.log('Fuera:', nombre);

// LET: ámbito de bloque
let pais = 'España';

function mostrarPais() {
    console.log(pais);
}

//mostrarPais();

if(pais == 'España') {
    let continente = 'Europa';
    //console.log(continente);
}

// No accesible desde fuera del bloque
// console.log('Fuera:', continente);

for(let contador = 0; contador <= 5; contador++) {
    //console.log(contador);
}

// No accesible desde fuera del bloque
//console.log('Contador:', contador);

// CONST: Crear constantes o variables que su contenido
// no es variable.

let edad = 18;

console.log(edad);

edad = 12;

console.log(edad);

const ciudad = 'Madrid';
const fechaNacimiento = 1995;

console.log(ciudad, fechaNacimiento);