// Crear set
let gadgets = new Set(["móvil", "tablet", "pc"]);

// Agregar elementos al set
gadgets.add("máquina de afeitar");
gadgets.add("PC sobremesa");
gadgets.add("tv");
gadgets.add("chromecast");

console.log(gadgets);

// Sacar el tamaño del set
console.log(gadgets.size);

// Eliminarlos
gadgets.delete("tv");

// Comprobar existencia
console.log(gadgets.has("tv"), gadgets.has("chromecast"));

// Recorrer el set
/*
for(let item of gadgets) {
    console.log(item);
}
*/

gadgets.forEach(item => console.log(item));

gadgets.clear();
console.log(gadgets);