let velas = [];
let sprays = [];
let ceramicas = [];
let listaDeCompras = [];
const nombreNegocio = 'Lirios & Amapolas';

// Función para cargar productos desde JSON
async function cargarProductos() {
  const response = await fetch('productos.json');
  if (!response.ok) {
    throw new Error('Error al cargar productos');
  }
  const data = await response.json();
  velas = data.velas || [];
  sprays = data.sprays || [];
  ceramicas = data.ceramicas || [];
}

// Unir todos los productos en un array
function obtenerTodosLosProductos() {
  return [...velas, ...sprays, ...ceramicas];
}

// Mostrar productos en pantalla
function mostrarProductos() {
  try {
    const todos = obtenerTodosLosProductos();
    const contenedor = document.getElementById('productos');
    contenedor.innerHTML = '<h2>Productos Disponibles:</h2><ul>' +
      todos.map(p => `
        <li>
          <strong>${p.nombre}</strong> - ${p.color || ''}, ${p.tamaño || ''}, ${p.aroma || p.ambiente || ''} - $${p.precio}
        </li>`).join('') +
      '</ul>';

    const select = document.getElementById('selectProducto');
    select.innerHTML = '';
    todos.forEach(p => {
      const option = document.createElement('option');
      option.value = p.nombre;
      option.textContent = p.nombre;
      select.appendChild(option);
    });
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error al mostrar productos',
      text: error.message
    });
  }
}

// Agregar producto al carrito
function agregarProducto() {
  try {
    const seleccion = document.getElementById('selectProducto').value;
    const producto = obtenerTodosLosProductos().find(p => p.nombre === seleccion);
    if (producto) {
      listaDeCompras.push(producto);
      actualizarCarrito();
      Swal.fire({
        icon: 'success',
        title: 'Producto agregado',
        text: `${producto.nombre} fue añadido al carrito.`
      });
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Producto no encontrado',
        text: 'Verificá la selección.'
      });
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error al agregar producto',
      text: error.message
    });
  }
}

// Mostrar carrito en pantalla
function actualizarCarrito() {
  try {
    const carrito = document.getElementById('carrito');
    carrito.innerHTML = '';
    listaDeCompras.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.nombre} - $${item.precio}`;
      carrito.appendChild(li);
    });
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error al actualizar carrito',
      text: error.message
    });
  }
}

// Inicialización
async function init() {
  try {
    await cargarProductos();
    mostrarProductos();
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'No se pudieron cargar los productos',
      text: error.message
    });
  }
}

window.addEventListener('DOMContentLoaded', init);
