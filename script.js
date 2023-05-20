let productos = [ {
    id: "aromatica-01",
    titulo: "aromatica-01",
    imagen: "./img/aromatica/01.jpg",
    categoria: {
        nombre: "Aromaticas",
        id: "aromaticas"
    },
    precio: 1000
},
{
    id: "aromatica-02",
    titulo: "aromatica-02",
    imagen: "./img/aromatica/02.jpg",
    categoria: {
        nombre: "Aromaticas",
        id: "aromaticas"
    },
    precio: 1000
},
{
    id: "aromatica-03",
    titulo: "aromatica-03",
    imagen: "./img/aromatica/03.jpg",
    categoria: {
        nombre: "Aromaticas",
        id: "aromaticas"
    },
    precio: 1000
},
{
    id: "aromatica-04",
    titulo: "aromatica-04",
    imagen: "./img/aromatica/04.jpg",
    categoria: {
        nombre: "Aromaticas",
        id: "aromaticas"
    },
    precio: 1000
},
{
    id: "aromatica-05",
    titulo: "aromatica-05",
    imagen: "./img/aromatica/05.jpg",
    categoria: {
        nombre: "Aromaticas",
        id: "aromaticas"
    },
    precio: 1000
},
{
    id: "hogar-01",
    titulo: "hogar-01",
    imagen: "./img/hogar/01.jpg",
    categoria: {
        nombre: "Hogares",
        id: "hogares"
    },
    precio: 1000
},
{
    id: "hogar-02",
    titulo: "hogar-02",
    imagen: "./img/hogar/02.jpg",
    categoria: {
        nombre: "Hogares",
        id: "hogares"
    },
    precio: 1000
},
{
    id: "hogar-03",
    titulo: "hogar-03",
    imagen: "./img/hogar/03.jpg",
    categoria: {
        nombre: "Hogares",
        id: "hogares"
    },
    precio: 1000
},
{
    id: "exterior-01",
    titulo: "exterior-01",
    imagen: "./img/exteriores/01.jpg",
    categoria: {
        nombre: "Exteriores",
        id: "exteriores"
    },
    precio: 1000
},
{
    id: "exterior-02",
    titulo: "exterior-02",
    imagen: "./img/exteriores/02.jpg",
    categoria: {
        nombre: "Exteriores",
        id: "exteriores"
    },
    precio: 1000
},
{
    id: "exterior-03",
    titulo: "exterior-03",
    imagen: "./img/exteriores/03.jpg",
    categoria: {
        nombre: "Exteriores",
        id: "exteriores"
    },
    precio: 1000
},
{
    id: "exterior-04",
    titulo: "exterior-04",
    imagen: "./img/exteriores/04.jpg",
    categoria: {
        nombre: "Exteriores",
        id: "exteriores"
    },
    precio: 1000
},
{
    id: "decoracion-01",
    titulo: "decoracion-01",
    imagen: "./img/decoraciones/01.jpg",
    categoria: {
        nombre: "Decoraciones",
        id: "decoraciones"
    },
    precio: 1000
},
{
    id: "decoracion-02",
    titulo: "decoracion-02",
    imagen: "./img/decoraciones/02.jpg",
    categoria: {
        nombre: "Decoraciones",
        id: "decoraciones"
    },
    precio: 1000
},
{
    id: "decoracion-03",
    titulo: "decoracion-03",
    imagen: "./img/decoraciones/03.jpg",
    categoria: {
        nombre: "Decoraciones",
        id: "decoraciones"
    },
    precio: 1000
},
{
    id: "decoracion-04",
    titulo: "decoracion-04",
    imagen: "./img/decoraciones/04.jpg",
    categoria: {
        nombre: "Decoraciones",
        id: "decoraciones"
    },
    precio: 1000
}];




const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #4b33a8, #785ce9)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}