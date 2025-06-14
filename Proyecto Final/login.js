let usuarios = [
  {
    id: 1,
    nombre: 'Magali',
    apellido: 'Lion',
    mail: 'magaa.lion97@gmail.com',
    user: 'magalion',
    contrasenia: '123',
    telefono: 1137048373,
    direccion: 'Avenida Frias 1953',
    codigoPostal: '1853',
    rol: 'Admin',
  }
];

// Login
document.getElementById('formLogin').addEventListener('submit', function (e) {
  e.preventDefault();

  const user = document.getElementById('user').value.trim();
  const password = document.getElementById('password').value.trim();
  const mensaje = document.getElementById('mensajeLogin');
  const formLogin = document.getElementById('formLogin');

  const encontrado = usuarios.find(u => u.user === user);

  if (encontrado) {
    if (encontrado.contrasenia === password) {
      localStorage.setItem('nombre', encontrado.nombre);
      formLogin.innerHTML =`¡Bienvenido ${encontrado.nombre} ${encontrado.apellido}!`;
      window.location.href = 'productos.html'
    //   mensaje.style.color = 'green';
    } else {
      mensaje.textContent = 'Contraseña incorrecta';
    //   mensaje.style.color = 'red';
    }
  } else {
    mensaje.textContent = 'Usuario no encontrado';
    // mensaje.style.color = 'red';
  }
});



