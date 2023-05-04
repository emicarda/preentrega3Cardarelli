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
}