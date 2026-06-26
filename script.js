// ===========================
// CERRAR SESIÓN
// ===========================
function cerrarSesion() {

    localStorage.removeItem("sesion");

    alert("Has cerrado sesión correctamente.");

    window.location.href = "login.html";

}

// ===========================
// AGREGAR AL CARRITO
// ===========================
function agregarCarrito(nombre, precio) {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push({
        nombre: nombre,
        precio: precio
    });

    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert(nombre + " agregado al carrito.");

}

// ===========================
// MOSTRAR CARRITO
// ===========================
function mostrarCarrito() {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    let lista = document.getElementById("listaCarrito");

    let total = 0;

    lista.innerHTML = "";

    carrito.forEach((producto, indice) => {

        total += producto.precio;

        lista.innerHTML += `
        <div class="item">
            <span>${producto.nombre} - $${producto.precio}</span>

            <button onclick="eliminarProducto(${indice})">
                Eliminar
            </button>
        </div>
        `;

    });

    document.getElementById("total").innerHTML = total.toFixed(2);

}

// ===========================
// ELIMINAR PRODUCTO
// ===========================
function eliminarProducto(indice) {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.splice(indice, 1);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrarCarrito();

}

// ===========================
// FINALIZAR COMPRA
// ===========================
function finalizarCompra() {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (carrito.length == 0) {

        alert("Tu carrito está vacío.");

        return;

    }

    window.location.href = "compra.html";

}
