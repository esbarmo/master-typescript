// Parámetros por defecto
function saludo(persona = "Hola, te mando un saludo ", year = 2026){
    console.log("Hola, te mando un saludo " + persona + ". Estamos a " + year + ".");
}

saludo("Pepe", 2020);

// Funciones flecha
let saludo2 = function(nombre){
    return "Hola, te mando un saludo " + nombre + ".";
}

console.log(saludo2("Carlos"));

let saludo3 = nombre => "Hola, te mando un saludo " + nombre + ".";

console.log(saludo3("Erick"));

let saludo4 = (nombre, pais) => "Hola, te mando un saludo " + nombre + " de " + pais + ".";

console.log(saludo4("Pepe", "España"));

let saludo5 = (nombre, pais) => {
    let continente = "Europa";

    if(pais !== "España"){
        let continente = "Asia";
    }

    return "Hola, te mando un saludo " + nombre + " de " + pais + " y el continente es " + continente + ".";
}

console.log(saludo5("Inma", "España"));

// Resumen
function multiplicacion(n1, n2){
    console.log(n1*n2);
}

let multiplicacion2 = (n1, n2) => console.log(n1*n2);

multiplicacion2(1, 4);

// JSON
let tienda = {
    nombre: "GAME",
    videojuegos: ["GTA", "WWE", "FIFA"],
    mostrar: function(){
        console.log(this.nombre);
    },
    mostrar2(){
        this.videojuegos.forEach(juego => {
            
            if(juego === "GTA"){
                console.log("El mejor juego de la historia");
            }

        });
    },
    mostrar3: () => {
        console.log(tienda.nombre);
    }
};

tienda.mostrar2();