//Declarando variables
let velas = []
let sprays = []
let ceramicas = []
let usuario = []
let listaDeCompras = []
const nombreNegocio = 'Lirios & Amapolas'

// Ingresando usuario nuevo 

//Entrada de datos a traves del comando prompt
usuario.push({
    id:1,
    nombre: 'Magali',
    apellido: 'Lion',
    mail: 'magaa.lion97@gmail.com',
    user: 'magalion',
    contrasenia: '123',
    telefono: 1137048373,
    direccion: 'Avenida Frias 1953',
    codigoPostal: '1853',
    rol: 'Admin',
})


// Declarando las variables Productos
velas.push ({
    id: 1,
    nombre: 'Vela Armonía',
    color: 'Blanca',
    aroma: 'Vainilla',
    tamaño: 'large',
    precio: 200, //en $
    cantidad: 1
})


sprays.push  ({
    id: 1,
    nombre: 'Spray Fantasía Negra',
    color: 'Negro',
    aroma: 'Coco',
    tamaño: 250, //en Ml
    precio: 100, //en $
    cantidad: 3
})

ceramicas.push ({
    id: 1,
    nombre: 'Linda Rose',
    color: 'Rosa',
    tamaño: 'Chico',
    precio: 400,
    ambiente: 'Cocina',
    precio: 200, //en $
    cantidad:2
})


// Función crear nuevo usuario

function registrarNuevoUsuario(usuario) {
    let nombre = prompt('Ingrese su nombre');
    let apellido = prompt('Ingrese su apellido');
    let mail = prompt('Ingrese su correo electrónico');
    do {
    user = prompt('Elija un nombre de usuario');

    usuarioExiste = false;
    for (let i = 0; i < usuario.length; i++) {
        if (usuario[i].user === user) {
            usuarioExiste = true;
            alert('Ese nombre de usuario ya está en uso. Intente con otro.');
            break;
        }
    }
    } while (usuarioExiste);
    let contrasenia = prompt('Elija una contraseña');
    let telefono = prompt('Ingrese su número de teléfono');
    let direccion = prompt('Ingrese su dirección');
    let codigoPostal = prompt('Ingrese su código postal');

    // Agregar nuevo usuario
    usuario.push({
        id: usuario.length + 1,
        nombre: nombre,
        apellido: apellido,
        mail: mail,
        user: user,
        contrasenia: contrasenia,
        telefono: telefono,
        direccion: direccion,
        codigoPostal: codigoPostal,
        rol: 'Cliente' // Por defecto
    });

    alert('¡Usuario creado exitosamente! Ahora puede iniciar sesión.');
}


// Función Iniciar Sesión 

function iniciarSesion(usuario, nombreNegocio) {
    let boolUsuario = confirm('Bienvenido a ' + nombreNegocio + '.\n\n¿Es usted usuario?');

    if (boolUsuario === true) {
        let nombreUsuario = prompt('Ingrese su usuario');
        let usuarioEncontrado = null;
        for (let i = 0; i < usuario.length; i++) {
            if (usuario[i].user === nombreUsuario) {
                usuarioEncontrado = usuario[i];
                break; // Terminamos el bucle al encontrar el usuario
            }
        }

        if (usuarioEncontrado) {
            let contrasenia = prompt('Ingrese su contraseña');

            if (contrasenia === usuarioEncontrado.contrasenia) {
                alert('¡Bienvenido ' + usuarioEncontrado.nombre + ' ' + usuarioEncontrado.apellido + '!');
            } else {
                alert('Contraseña incorrecta');
            }
        } else {
            alert('Usuario no encontrado');
            let deseaRegistrar = confirm('¿Desea crearse un usuario?');
            if (deseaRegistrar) {
                registrarNuevoUsuario(usuario);
            } else {
                alert('Hasta luego.');
            }
        }
    } else {
        let deseaRegistrar = confirm('¿Desea crearse un usuario?');
        if (deseaRegistrar) {
            registrarNuevoUsuario(usuario);
        } else {
            alert('Hasta luego.');
        }
    }
}


iniciarSesion(usuario, nombreNegocio);


// Función Mostrar productos 

function mostrarProductos() {
    const listaProductos = [velas,sprays,ceramicas]
    console.log('Bienvenido a la tienda Online. ¡Estos son los productos disponibles!:');
    
    for (let i = 0; i < listaProductos.length; i++) {
        console.log('Producto ' + (i + 1) + ':', listaProductos[i]);
    }
}



function crearPedido() {
    const todosLosProductos = [];
    for (let i = 0; i < velas.length; i++) {
        todosLosProductos.push(velas[i]);
    }
    for (let i = 0; i < sprays.length; i++) {
        todosLosProductos.push(sprays[i]);
    }
    for (let i = 0; i < ceramicas.length; i++) {
        todosLosProductos.push(ceramicas[i]);
    }
    

    let seguirAgregando = true;

    while (seguirAgregando) {
        let nombresDisponibles = '';
        for (let i = 0; i < todosLosProductos.length; i++) {
            nombresDisponibles += todosLosProductos[i].nombre + '\n';
        }

        let nuevoProducto = prompt('Selecciona un producto de la lista:\n\n' + nombresDisponibles);

        
        let productoEncontrado = null;
        for (let i = 0; i < todosLosProductos.length; i++) {
            if (todosLosProductos[i].nombre.toLowerCase() === nuevoProducto.trim().toLowerCase()) {
                productoEncontrado = todosLosProductos[i];
                break;
            }
        }

        if (productoEncontrado !== null) {
            listaDeCompras.push(productoEncontrado);
            alert('Producto agregado: ' + productoEncontrado.nombre);
        } else {
            alert('Ese producto no está en la tienda. Intente de nuevo.');
        }

        seguirAgregando = confirm('¿Desea agregar otro producto?');
    }

    console.log('Lista final de productos seleccionados:');
    console.log(listaDeCompras);
}


mostrarProductos()
realizarCompra = confirm('¿Desea realizar una compra en nuestro sitio?')
if (realizarCompra=== true)
    crearPedido()