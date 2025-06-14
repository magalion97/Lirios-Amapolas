let velas = []
let sprays = []
let ceramicas = []
let usuario = []
let listaDeCompras = []
const nombreNegocio = 'Lirios & Amapolas'

velas.push({
    id: 1,
    nombre: 'Vela Armonía',
    color: 'Blanca',
    aroma: 'Vainilla',
    tamaño: 'large',
    precio: 200,
    cantidad: 1
})

sprays.push({
    id: 1,
    nombre: 'Spray Fantasía Negra',
    color: 'Negro',
    aroma: 'Coco',
    tamaño: 250,
    precio: 100,
    cantidad: 3
})

ceramicas.push({
    id: 1,
    nombre: 'Linda Rose',
    color: 'Rosa',
    tamaño: 'Chico',
    ambiente: 'Cocina',
    precio: 200,
    cantidad: 2
})



const todosLosProductos = []
for (let i = 0; i < velas.length; i++) {
  todosLosProductos.push(velas[i])
}
for (let i = 0; i < sprays.length; i++) {
  todosLosProductos.push(sprays[i])
}
for (let i = 0; i < ceramicas.length; i++) {
  todosLosProductos.push(ceramicas[i])
}

function mostrarProductos() {
  const contenedor = document.getElementById('productos')
  contenedor.innerHTML = '<h2>Productos Disponibles:</h2><ul>' + 
    todosLosProductos.map(p => `
      <li>
        <strong>${p.nombre}</strong> - ${p.color}, ${p.tamaño}, ${p.aroma || p.ambiente || ''} - $${p.precio}
      </li>`).join('') + 
    '</ul>'

  const select = document.getElementById('selectProducto')
  select.innerHTML = ''
  todosLosProductos.forEach(p => {
    const option = document.createElement('option')
    option.value = p.nombre
    option.textContent = p.nombre
    select.appendChild(option)
  })
}

function agregarProducto() {
  const seleccion = document.getElementById('selectProducto').value
  const producto = todosLosProductos.find(p => p.nombre === seleccion)
  if (producto) {
    listaDeCompras.push(producto)
    actualizarCarrito()
  }
}

function actualizarCarrito() {
  const carrito = document.getElementById('carrito')
  carrito.innerHTML = ''
  listaDeCompras.forEach((item) => {
    const li = document.createElement('li')
    li.textContent = `${item.nombre} - $${item.precio}`
    carrito.appendChild(li)
  })
}