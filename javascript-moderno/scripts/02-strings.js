document.addEventListener('DOMContentLoaded', function () {
    // Strings clasicos
    let nombre = "Estela";
    let apellidos = "Barceló";
    let profesion = "Desarrolladora y diseñadora Web";
    let nya = nombre + " " + apellidos + "\n" + profesion;

    // Template Strings
    let plantilla = `${nombre} ${apellidos}
${profesion}`;

    console.log(nya);
    console.log(plantilla);

    function ficha(nombre, apellidos, profesion) {
        let fichaTecnica = `
    <div class="ficha">
    <h2>${nombre} ${apellidos}</h2>
    <h3>${profesion}</h3>
    <p>Forma parte del equipo de Marketing</p>
    </div>
    `;
        return fichaTecnica;
    }

    let cajaFichas = document.createElement("section");

    cajaFichas.innerHTML = ficha("Estela", "Barceló", "Desarrolladora y diseñadora web");

    cajaFichas.innerHTML += ficha("María", "Pérez", "Responsable de Marketing");

    cajaFichas.innerHTML += ficha("Cristina", "Álvarez", "Diseñadora Gráfica");

    document.querySelector("#contenedor").appendChild(cajaFichas);
}, false);