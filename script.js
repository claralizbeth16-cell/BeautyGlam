// ==========================
// VERIFICAR SESIÓN
// ==========================
function verificarSesion() {
    if (localStorage.getItem("sesion") !== "activa") {
        alert("Debes iniciar sesión.");
        window.location.href = "login.html";
    }
}

// ==========================
// CERRAR SESIÓN
// ==========================
function cerrarSesion() {

    if(confirm("¿Deseas cerrar sesión?")){

        localStorage.removeItem("sesion");

        alert("Sesión cerrada correctamente.");

        window.location.href="index.html";

    }

}

// ==========================
// AGREGAR PRODUCTOS
// ==========================
function agregarCarrito(nombre, precio){

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push({
        nombre:nombre,
        precio:precio
    });

    localStorage.setItem("carrito",JSON.stringify(carrito));

    alert(nombre + " agregado al carrito.");

}

// ==========================
// MOSTRAR CARRITO
// ==========================
function mostrarCarrito(){

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    let lista = document.getElementById("listaCarrito");

    let total = 0;

    if(!lista) return;

    lista.innerHTML="";

    carrito.forEach((producto,index)=>{

        total += Number(producto.precio);

        lista.innerHTML += `

        <div class="item">

            <span>${producto.nombre} - $${producto.precio}</span>

            <button onclick="eliminarProducto(${index})">

                Eliminar

            </button>

        </div>

        `;

    });

    document.getElementById("total").innerHTML = total.toFixed(2);

}

// ==========================
// ELIMINAR PRODUCTO
// ==========================
function eliminarProducto(indice){

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.splice(indice,1);

    localStorage.setItem("carrito",JSON.stringify(carrito));

    mostrarCarrito();

}

// ==========================
// FINALIZAR COMPRA
// ==========================
function finalizarCompra(){

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if(carrito.length==0){

        alert("Tu carrito está vacío.");

        return;

    }

    window.location.href="compra.html";

}
