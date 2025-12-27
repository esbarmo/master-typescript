// SPREAD
let peliculas = ["Magnolia", "Matrix", "Blade Runner", "La peor persona del mundo"];

//console.log(peliculas[0], peliculas[1], peliculas[2]);
console.log(...peliculas);

function mostrarPeliculas(pelicula1, pelicula2){
    console.log(`
        *****MIS PELÍCULAS FAVORITAS*****
            - ${pelicula1}
            - ${pelicula2}
        fin.
    `);
}

mostrarPeliculas(...peliculas);

let peliculas_fav = ["Pequeñas criaturas", "Anora", ...peliculas];
console.log(peliculas_fav);

//REST
function cartelera(pelicula1, pelicula2, ...restoDePeliculas){
    console.log(pelicula1);
    console.log(pelicula2);

    for(pelicula of restoDePeliculas){
        console.log(pelicula);
    }
}

cartelera("Gran torino",
    "Love actually",
    "Batman",
    "Dune"
);