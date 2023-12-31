document.addEventListener('DOMContentLoaded', function () {
    const juegos = [
        { nombre: 'Breath of Fire 4', precio: 30 },
        { nombre: 'Twisted Metal', precio: 29 },
        { nombre: 'Digimon World 2', precio: 39},
        { nombre: 'Strider 2', precio: 20},
        { nombre: 'Persona 3', precio: 29},
        { nombre: 'DarkWatch', precio: 19}  ,      
        { nombre: 'Black', precio: 29 },
        { nombre: 'Mortal Kombat Armaggedon', precio: 39},
        { nombre: 'Borderlands', precio: 49},
        { nombre: 'Darksiders', precio: 19}  ,      
        { nombre: 'Shadow of Mordor', precio: 29 },
        { nombre: 'Fallout 3', precio: 39},
        { nombre: 'Ghostbusters', precio: 19},
        { nombre: 'RememberMe', precio: 29}  ,      
        { nombre: 'Left 4 Dead', precio: 9 },
        { nombre: 'Operation Darkness', precio: 19},

    ];

    const carrito = [];

    const listaCarrito = document.getElementById('listaCarrito');
    const totalCarrito = document.getElementById('totalCarrito');
    const descargarCarritoBtn = document.getElementById('descargarCarrito');

    function agregarAlCarrito(event) {
        const juegoIndex = event.target.getAttribute('data-index');
        const juego = juegos[juegoIndex];

        const existeEnCarrito = carrito.some(item => item.nombre === juego.nombre);

        if (!existeEnCarrito) {
            carrito.push({ nombre: juego.nombre, precio: juego.precio });
            actualizarCarrito();
        }
    }

    function actualizarCarrito() {
        listaCarrito.innerHTML = '';

        let precioTotal = 0;

        carrito.forEach(item => {
            const itemCarrito = document.createElement('li');
            itemCarrito.classList.add('list-group-item');
            itemCarrito.textContent = `${item.nombre} - ${item.precio.toFixed(2)}Gb`;
            listaCarrito.appendChild(itemCarrito);
            precioTotal += item.precio;
        });

        totalCarrito.textContent = `Peso Total: ${precioTotal.toFixed(2)}Gb`;
    }

    function actualizarTotal() {
        const total = carrito.reduce((sum, item) => sum + item.precio, 0);
        totalCarrito.textContent = `Peso Total: ${total.toFixed(2)}Gb`;
    }

    document.querySelectorAll('.agregar-carrito').forEach(btn => {
        btn.addEventListener('click', agregarAlCarrito);
    });

    descargarCarritoBtn.addEventListener('click', descargarCarrito);

    function descargarCarrito() {
        alert('Descarga iniciada, Muchas gracias por confiar en El Gremio33!');
        carrito.length = 0;
        actualizarCarrito();
    }

    actualizarTotal();
});
