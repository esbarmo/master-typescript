const antiguos_gadgets = {
    seis: "radio",
    siete: "teléfono fijo",
    ocho: "compact disc"
};

const gadgets = new Map(Object.entries(antiguos_gadgets));
                    // WeakMap y WeakSet

gadgets.set(1, "PC")
    .set(2, "TV")
    .set(3, "tablet")
    .set("cuatro", "móvil")
    .set("cinco", "laptop");

console.log(gadgets);

console.log(gadgets.has(8));