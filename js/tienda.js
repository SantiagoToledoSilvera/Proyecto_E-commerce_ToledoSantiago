const contenedor = document.querySelector(".productos");
const productos = JSON.parse(localStorage.getItem("productos")) || [];

productos.forEach(function(producto, index){
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${producto.imagen}">
        <h2>${producto.nombre}</h2>
        <h3>$${producto.precio}</h3>
        <p>${producto.descripcion}</p>
        <a href="prod.html?id=${index}">
            Ver producto
        </a>
        <button class="carrito">
            Agregar al carrito
        </button>
    `;
    contenedor.appendChild(card);

    const btnCarrito = card.querySelector(".carrito");
    btnCarrito.addEventListener("click", function(){
        const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carrito.push(producto);
        localStorage.setItem(
            "carrito",
            JSON.stringify(carrito)
        );
        alert("Producto agregado");
    });
});

const abrirCarrito = document.getElementById("abrirCarrito");
const modal = document.getElementById("modalCarrito");
const cerrarCarrito = document.getElementById("cerrarCarrito");
    abrirCarrito.addEventListener("click", function(){
        modal.style.display = "flex";
        mostrarCarrito();
    });
    cerrarCarrito.addEventListener("click", function(){
    modal.style.display = "none";
    });

function mostrarCarrito(){
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const items = document.getElementById("itemsCarrito");
    items.innerHTML = "";
    let total = 0;
    carrito.forEach(function(producto){
        total += Number(producto.precio);
        const div =
        document.createElement("div");
        div.innerHTML = `
            <img
            src="${producto.imagen}"
            width="50">
            <p>${producto.nombre}</p>
            <p>$${producto.precio}</p>
            <hr>
            <button class="eliminar">
                Eliminar
            </button>
        `;
        items.appendChild(div);
        const btnEliminar = div.querySelector(".eliminar");
        btnEliminar.addEventListener("click", function(){
        const nuevoCarrito =
        carrito.filter(function(item){
            return item.nombre !== producto.nombre;
        });
        localStorage.setItem(
            "carrito",
            JSON.stringify(nuevoCarrito)
        );
        mostrarCarrito();
        });
    });
    document.getElementById("total")
    .textContent =
    "Total: $" + total;
    }

const btnComprar = document.getElementById("comprar");
btnComprar.addEventListener("click", function(){
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
    const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
    let total = 0;
    carrito.forEach(function(producto){
        total += Number(producto.precio);
    });
    const pedido = {
        usuario:
        usuarioActivo.user,
        dni:
        document.getElementById("dni").value,
        usuario:
        usuarioActivo.user,
        email:
        usuarioActivo.email,
        direccion:
        document.getElementById("direccion").value,
        telefono:
        document.getElementById("telefono").value,
        productos: carrito,
        total: total,
        fecha:
        new Date().toLocaleString()
    };
    pedidos.push(pedido);
    localStorage.setItem(
        "pedidos",
        JSON.stringify(pedidos)
    );
    localStorage.removeItem("carrito");
    alert("Compra realizada");
    location.reload();
});