const boton = document.getElementById("agregar");
const tbody = document.querySelector("tbody");
const categ = JSON.parse(localStorage.getItem("categ")) || [];

function agregarEventos(fila) {
    const btnEliminar = fila.querySelector(".eliminar");
    btnEliminar.addEventListener("click", function() {
        fila.remove();
    });

    const btnEditar = fila.querySelector(".editar");
    btnEditar.addEventListener("click", function() {
        const nuevoNombre = prompt(
            "Editar categoría:",
            fila.children[0].textContent
        );
        const nuevaDesc = prompt(
            "Editar descripción:",
            fila.children[1].textContent
        );
        fila.children[0].textContent = nuevoNombre;
        fila.children[1].textContent = nuevaDesc;
    });
}
categ.forEach(function(categoria) {
    const fila = document.createElement("tr");

    fila.innerHTML = `
    <td>${categoria.cat}</td>
    <td>${categoria.des}</td>
    <td>
        <button class="editar">Editar</button>
        <button class="eliminar">Eliminar</button>
    </td>
    `;
    tbody.appendChild(fila);
    agregarEventos(fila);
});

boton.addEventListener("click", function() {
    const nombre = document.getElementById("nombre").value;
    const desc = document.getElementById("desc").value;

    if(nombre === "" || desc ===""){
        alert("No se ingresó información");
        return;
    }

    const nuevaCateg = {
            cat: nombre,
            des: desc
        };

    categ.push(nuevaCateg);

    localStorage.setItem(
            "categ",
            JSON.stringify(categ)
        );
    const fila = document.createElement("tr");

    fila.innerHTML = `
    <td>${nombre}</td>
    <td>${desc}</td>
    <td>
        <button class="editar">Editar</button>
        <button class="eliminar">Eliminar</button>
    </td>
    `;
    tbody.appendChild(fila);
    agregarEventos(fila);

    const btnEliminar = fila.querySelector(".eliminar");
    btnEliminar.addEventListener("click", function() {
        fila.remove();
            });

    const btnEditar = fila.querySelector(".editar");
    btnEditar.addEventListener("click", function() {
        const nuevoNombre = prompt("Editar categoría:", nombre);
        const nuevaDesc = prompt("Editar descripción:", desc);
        fila.children[0].textContent = nuevoNombre;
        fila.children[1].textContent = nuevaDesc;
    });

    document.getElementById("nombre").value="";
    document.getElementById("desc").value="";
    alert("Categoria agregada exitosamente.")
});