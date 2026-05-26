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