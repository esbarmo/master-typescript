let nombre = "Estela";

function mostrarNombre() {

    let apellidos = "Barceló";
    function mostrarApellidos() {

        let profesion = "Support Analyst";
        function mostrarProfesion() {
            return nombre + " " + apellidos + ", " + profesion;
        }

        return mostrarProfesion;
    }

    return mostrarApellidos;
}

console.log(mostrarNombre()()());