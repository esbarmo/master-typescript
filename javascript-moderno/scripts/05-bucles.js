let nombres = [
    "Bassem",
    "Bharghavi",
    "Sertan",
    "Anusha"
];

// Bucle clásico
for(let i = 0; i < nombres.length; i++){
    // console.log(nombres[i]);
}

// For of
for(let nombre of nombres){
    //console.log(nombre);
}

// For in - recorrer json
for(let indice in nombres){
    //console.log(indice, nombres[indice]);
}

// ForEach
//nombres.forEach((nombre_actual, indice) => console.log(indice, nombre_actual));

// Recorrer string
let sitioweb = "victorroblesweb.es";

for(let letra of sitioweb){
    //console.log(letra);
}

// Iterables
const mi_iterable = nombres[Symbol.iterator]();

//console.log(typeof mi_iterable, mi_iterable);
/*
console.log(mi_iterable.next());
console.log(mi_iterable.next());
console.log(mi_iterable.next());
console.log(mi_iterable.next());
console.log(mi_iterable.next());
*/

// JSON
let fruta = {
    nombre: "Plátano",
    color: "Amarillo",
    temporada: "Anual"
}

fruta[Symbol.iterator] = function(){
    let indice = 0;
    let valores = Object.values(this);

    return {
        next(){
            
            if(indice >= valores.length){
                return {
                    done: true,
                    value: undefined
                };
            }

            return {
                done: false,
                value: valores[indice],
                indice: indice++
            }
        }
    };
}

for(let propiedad of fruta){
    //console.log(propiedad);
}

for(let propiedad in fruta){
    console.log(propiedad, fruta[propiedad]);
}