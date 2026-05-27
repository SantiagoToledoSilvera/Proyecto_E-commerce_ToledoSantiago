const boton = document.getElementById("agregar");
const contenedor = document.querySelector(".productos");
const productos = JSON.parse(localStorage.getItem("productos")) || [];

function agregarEventos(card) {
    const btnEliminar = card.querySelector(".eliminar");
    btnEliminar.addEventListener("click", function() {
    const nombreProducto =
    card.children[1].textContent;
    const nuevoProd =
    productos.filter(function(producto){
        return producto.nombre !== nombreProducto;
    });
    productos.length = 0;
    productos.push(...nuevoProd);
    localStorage.setItem(
        "productos",
        JSON.stringify(nuevoProd)
    );
    card.remove();
    });
    const btnEditar = card.querySelector(".editar");
btnEditar.addEventListener("click", function() {
    const nombreOriginal =
        card.children[1].textContent;
    const nuevoNombre = prompt(
        "Editar nombre:",
        card.children[1].textContent
    );
    const nuevaCategoria = prompt(
        "Editar categoría:",
        card.children[4].textContent
    );
    const nuevoPrecio = prompt(
        "Editar precio:",
        card.children[2].textContent.replace("$", "")
    );
    const nuevaImagen = prompt(
        "Editar imagen:",
        card.children[0].src
    );
    const nuevaDescripcion = prompt(
        "Editar descripción:",
        card.children[3].textContent
    );
    card.children[0].src = nuevaImagen;
    card.children[1].textContent = nuevoNombre;
    card.children[2].textContent =
    `$${nuevoPrecio}`;
    card.children[3].textContent =
    nuevaDescripcion;
    card.children[4].textContent =
    nuevaCategoria;

    const productoEditado = productos.find(function(producto){
    return producto.nombre === nombreOriginal;
        });

        productoEditado.nombre = nuevoNombre;
        productoEditado.categoria = nuevaCategoria;
        productoEditado.precio = nuevoPrecio;
        productoEditado.imagen = nuevaImagen;
        productoEditado.descripcion = nuevaDescripcion;

        localStorage.setItem(
            "productos",
            JSON.stringify(productos)
        );
        });
}
productos.forEach(function(producto) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${producto.imagen}">
        <h2>${producto.nombre}</h2>
        <h3>$${producto.precio}</h3>
        <p>${producto.descripcion}</p>
        <small>${producto.categoria}</small>
        <div class="acciones">
            <button class="editar">
                Editar
            </button>
            <button class="eliminar">
                Eliminar
            </button>
        </div>
    `;
    contenedor.appendChild(card);
    agregarEventos(card);
});

boton.addEventListener("click", function() {
    const nombre = document.getElementById("nombre").value;
    const categoria = document.getElementById("categoria").value;
    const precio = document.getElementById("precio").value;
    const imagen = document.getElementById("imagen").value;
    const descripcion = document.getElementById("descripcion").value;

    if(
        nombre === "" ||
        categoria ==="" ||
        precio === "" ||
        imagen === "" ||
        descripcion === ""
        ){
        alert("Complete todos los campos.");
        return;
    }
    const nuevoProd = {
            nombre: nombre,
            categoria: categoria,
            precio: precio,
            imagen: imagen,
            descripcion: descripcion
        };
    productos.push(nuevoProd);

    localStorage.setItem(
            "productos",
            JSON.stringify(productos)
        );
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${imagen}">
        <h2>${nombre}</h2>
        <h3>$${precio}</h3>
        <p>${descripcion}</p>
        <small>${categoria}</small>
        <div class="acciones">
            <button class="editar">
                Editar
            </button>
            <button class="eliminar">
                Eliminar
            </button>
        </div>
    `;
    contenedor.appendChild(card);
    agregarEventos(card);

    document.getElementById("nombre").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("imagen").value = "";
    document.getElementById("descripcion").value = "";

    alert("Producto agregado exitosamente");
});