// Molde
class Coche {

    #npuertas = 4;
    _nplazas = 5;

    // Método que se ejecuta primero
    constructor(marca,
        modelo,
        color,
        velocidad,
        year
    ) {
        // Propiedades o atributos
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.velocidad = velocidad;
        this.year = year;
    }

    // Métodos / acciones o las funcionalidades del objeto
    subirVelocidad() {
        this.velocidad += 1;
    }

    bajarVelocidad() {
        this.velocidad -= 1;
    }

    // Métodos SET y GET (setter y getter)
    set guardarMarca(marca) {
        this.marca = marca;
    }

    get devolverMarca() {
        return this.marca;
    }

    get numeroPuertas() {
        return this.#npuertas;
    }

    get numeroPlazas() {
        return this._nplazas;
    }

    // Método estático
    static saludar(nombre) {
        return "Hola, " + nombre;
    }
}

// Crear objeto
let mi_coche = new Coche("Audi", "C4", "Rojo", 100, 2023);

mi_coche.subirVelocidad();
mi_coche.subirVelocidad();
mi_coche.subirVelocidad();
mi_coche.bajarVelocidad();

mi_coche.guardarMarca = "Chevrolet";

/*
console.log(mi_coche.devolverMarca);

console.log(mi_coche.marca, mi_coche.modelo, mi_coche.color, mi_coche.velocidad + " km/h");

console.log(Coche.saludar("María"));

console.log(mi_coche.numeroPlazas);
*/

// Herencia
class Quad extends Coche {
    constructor(marca,
        modelo,
        color,
        velocidad,
        year,
        cilindrada
    ) {

        super(marca,
            modelo,
            color,
            velocidad,
            year);
        this.cilindros = cilindrada;
    }

    saltar() {
        return "Has saltado una rampa.";
    }
}

let mi_quad = new Quad("Suzuki", "Loquesea", "Amarillo", 200, 2020, 70);

mi_quad.subirVelocidad();
mi_quad.subirVelocidad();
mi_quad.subirVelocidad();
mi_quad.subirVelocidad();

mi_quad.guardarMarca = "Peugeot";

console.log(mi_quad.saltar());
console.log(mi_quad.marca);