const params =
new URLSearchParams(window.location.search);
const id = params.get("id");
const productos =
JSON.parse(localStorage.getItem("productos")) || [];
const producto = productos[id];
document.getElementById("imgProducto").src =
producto.imagen;
document.getElementById("nombreProducto").textContent =
producto.nombre;
document.getElementById("precioProducto").textContent =
"$" + producto.precio;
document.getElementById("descProducto").textContent =
producto.descripcion;

const btnCarrito = document.getElementById("agregarCarrito");
btnCarrito.addEventListener("click", function(){
    const carrito =
    JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(producto);
    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );
    alert("Producto agregado al carrito");
});