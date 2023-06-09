const actualizarValorCarrito = () => {
    let valorCarrito = document.getElementById("valorCarrito");
    valorCarrito.textContent=carrito.length;
}

const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
actualizarValorCarrito()

const contenedor = document.getElementById('productos')
let valorTotal = 0


// pintar el arrays

const pintarProductos = () => {
    let index = 0
    productos.forEach((productos) => {
        const div = document.createElement('div')
        div.classList.add('productos')
        div.innerHTML = `
        <div class="container">
        <div class="card-flex">
            <div class="card-info">
                <div class="product-image">
                    <img src="${productos.img}" alt="${productos.titulo}">
                </div>
                <h3>${productos.nombre}</h3>
                <span>Descripcion</span>
                <p>$${productos.precio}</p>
                <button onclick="aggCarrito(${index})" class="producto-agregar" id="${productos.id}">Agregar</button>
            </div>
        `
        contenedor.appendChild(div)
            index++
        
    })
};

pintarProductos()

// funciones
function aggCarrito (producto) {
    valorTotal += productos[producto].precio
    carrito.push(productos[producto])
    localStorage.setItem('carrito', JSON.stringify(carrito))
    actualizarValorCarrito()

    Toastify({
        text: "Producto agregado",
        duration: 2000,
        destination:"./carrito.html",
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: "linear-gradient(to right, #949191,#242121)",
        borderRadius: "10px",
        textTransform: "uppercase",
        fontSize: "12px"
        },
        onClick: function(){} // Callback after click
    }).showToast();
}

// aca use la api de github se puede apreciar el el footer 

fetch('https://github.com/emicarda')
    // Exito
    .then(response => response.json())  // convertir a json
    .then(json => 
    actualizarGit(json)

    )    //imprimir los datos en la consola
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores


    const actualizarGit = (json) => {
        let valorgit = document.getElementById("githubE");
        valorgit.textContent=json.login;
    }
