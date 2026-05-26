const contenedor = document.querySelector(".pedidos");

const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

pedidos.forEach(function(pedido){
    const card = document.createElement("div");
    card.classList.add("pedido");
    let productosHTML = "";
    pedido.productos.forEach(function(producto){
        productosHTML += `
            <p>${producto.nombre}</p>
        `;
    });
    card.innerHTML = `
        <h2>${pedido.usuario}</h2>
        <p>DNI: ${pedido.dni}</p>
        <p>Dirección:
        ${pedido.direccion}</p>
        <p>Teléfono:
        ${pedido.telefono}</p>
        <p>Email:
        ${pedido.email}</p>
        <p>Usuario:
        ${pedido.usuario}</p>
        <p>Fecha:
        ${pedido.fecha}</p>
        <h3>Total:
        $${pedido.total}</h3>
        <hr>
        ${productosHTML}
    `;
    contenedor.appendChild(card);
});