// ==========================
// REGISTRAR USUARIO
// ==========================
function registrar() {

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let password = document.getElementById("password").value;

    if(nombre=="" || correo=="" || password==""){
        alert("Complete todos los campos.");
        return;
    }

    let usuario = {
        nombre: nombre,
        correo: correo,
        password: password
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Cuenta creada correctamente.");

    window.location.href="login.html";

}

// ==========================
// INICIAR SESIÓN
// ==========================
function login(){

    let correo=document.getElementById("correo").value;
    let password=document.getElementById("password").value;

    let usuario=JSON.parse(localStorage.getItem("usuario"));

    if(usuario==null){
        alert("Primero debes crear una cuenta.");
        window.location.href="crear-cuenta.html";
        return;
    }

    if(correo==usuario.correo && password==usuario.password){

        localStorage.setItem("sesion","activa");

        alert("Bienvenida "+usuario.nombre);

        window.location.href="productos.html";

    }else{

        alert("Correo o contraseña incorrectos.");

    }

}

// ==========================
// VERIFICAR SESIÓN
// ==========================
function verificarSesion(){

    if(localStorage.getItem("sesion")!="activa"){

        alert("Debes iniciar sesión.");

        window.location.href="login.html";

    }

}

// ==========================
// CERRAR SESIÓN
// ==========================
function cerrarSesion(){

    localStorage.removeItem("sesion");

    window.location.href="index.html";

}

// ==========================
// AGREGAR PRODUCTOS
// ==========================
function agregarCarrito(nombre,precio){

    let carrito=JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push({

        nombre:nombre,
        precio:precio

    });

    localStorage.setItem("carrito",JSON.stringify(carrito));

    alert(nombre+" agregado al carrito.");

}

// ==========================
// MOSTRAR CARRITO
// ==========================
function mostrarCarrito(){

    let carrito=JSON.parse(localStorage.getItem("carrito")) || [];

    let lista=document.getElementById("listaCarrito");

    let total=0;

    lista.innerHTML="";

    carrito.forEach(function(producto,indice){

        total+=producto.precio;

        lista.innerHTML+=`

        <div class="item">

            <span>${producto.nombre} - $${producto.precio}</span>

            <button onclick="eliminarProducto(${indice})">

            Eliminar

            </button>

        </div>

        `;

    });

    document.getElementById("total").innerHTML="$"+total.toFixed(2);

}

// ==========================
// ELIMINAR PRODUCTO
// ==========================
function eliminarProducto(indice){

    let carrito=JSON.parse(localStorage.getItem("carrito"));

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

    localStorage.removeItem("carrito");

    window.location.href="compra.html";

}

    alert("Gracias por comprar en Beauty Glam 💖");

    localStorage.removeItem("carrito");

    window.location.href="productos.html";

}
