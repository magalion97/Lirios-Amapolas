let usuarios = []
// Registro
document.getElementById('formRegistro').addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const mail = document.getElementById('mail').value.trim();
  const user = document.getElementById('userRegistro').value.trim();
  const contrasenia = document.getElementById('contrasenia').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const direccion = document.getElementById('direccion').value.trim();
  const codigoPostal = document.getElementById('codigoPostal').value.trim();
  const mensaje = document.getElementById('mensajeRegistro');

  const yaExiste = usuarios.some(u => u.user === user);

  if (yaExiste) {
    mensaje.textContent = 'Ese usuario ya está registrado.';
    // mensaje.style.color = 'red';
    return;
  }

  usuarios.push({
    id: usuarios.length + 1,
    nombre,
    apellido,
    mail,
    user,
    contrasenia,
    telefono,
    direccion,
    codigoPostal,
    rol: 'Cliente'
  });

  mensaje.textContent = '¡Usuario registrado con éxito!';
  window.location.href = 'productos.html'
  //mensaje.style.color = 'green';

  // Limpiar formulario
  document.getElementById('formRegistro').reset();

});


// const BotonIngresar = document.getElementById('LogIn')

// BotonIngresar.addEventListener('click',()=>{
//     window.location.href='login.html'
// })
