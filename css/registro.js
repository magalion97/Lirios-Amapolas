let usuarios = [];
let tiempo = 5000;

// Validaciones con Regex
function esTextoValido(texto) {
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/;
  return regex.test(texto);
}

function esNumeroValido(valor) {
  return /^\d+$/.test(valor);
}

// Función para registrar usuario (Promise simulada con delay)
function registrarUsuarioAsync(nuevoUsuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const yaExiste = usuarios.some(u => u.user === nuevoUsuario.user);
      if (yaExiste) {
        reject(new Error('Ese usuario ya está registrado.'));
      } else {
        usuarios.push(nuevoUsuario);
        resolve('¡Usuario registrado con éxito!');
      }
    }, 1000);
  });
}

// Evento submit del formulario
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

  try {
    // Validaciones sincrónicas
    if (!esTextoValido(nombre) || !esTextoValido(apellido)) {
      throw new Error('Nombre y apellido incorrectos');
    }

    if (user.length < 3 || /\W/.test(user)) {
      throw new Error('El nombre de usuario debe tener al menos 3 letras y no contener símbolos.');
    }

    if (contrasenia.length < 4) {
      throw new Error('La contraseña debe tener al menos 4 caracteres.');
    }

    if (telefono && !esNumeroValido(telefono)) {
      throw new Error('El teléfono solo debe contener números.');
    }

    if (codigoPostal && !esNumeroValido(codigoPostal)) {
      throw new Error('El código postal solo debe contener números.');
    }

    const nuevoUsuario = {
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
    };

    // Registro asincrónico
    registrarUsuarioAsync(nuevoUsuario)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: '¡Tu cuenta fue creada correctamente!',
          timer: 2000,
          showConfirmButton: false
        });

        document.getElementById('formRegistro').reset();

        setTimeout(() => {
          window.location.href = 'productos.html';
        }, tiempo);
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Registro fallido',
          text: error.message
        });
      });

  } catch (error) {
    Swal.fire({
      icon: 'warning',
      title: 'Datos inválidos',
      text: error.message
    });
  }
});
