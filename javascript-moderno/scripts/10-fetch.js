window.addEventListener("DOMContentLoaded", event => {
    console.log(event);

    let caja = document.querySelector("#contenedor");
    caja.innerHTML = "Cargando...";

    // Petición ajax moderna
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(items => {
            console.log(items);
            caja.innerHTML = "";
            mostrar(caja, items);
        })
        .catch(error => {
            console.log("La petición ajax ha fallado");
        })
        ;

    // DOM
    function mostrar(contenedor, elementos) {

        elementos.forEach(elemento => {
            let muestrame = `
            <article>
                <h2>${elemento.title}</h2>
                <p>${elemento.body}</p>
            </article>
            <hr/>
        `;
            contenedor.innerHTML += muestrame;
        });

        return elementos;
    }
});