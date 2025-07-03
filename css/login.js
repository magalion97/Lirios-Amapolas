let usuarios = [];
let tiempo = 3000;

// Cargar usuarios desde archivo JSON
fetch('usuarios.json')
  .then(respuesta => {
    if (!respuesta.ok) {
      throw new Error('No se pudo cargar el archivo JSON');
    }
    return respuesta.json();
  })
  .then(data => {
    usuarios = data;

    document.getElementById('formLogin').addEventListener('submit', function (e) {
      e.preventDefault();

      try {
        const user = document.getElementById('user').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!user || !password) {
          return Swal.fire({
            icon: 'warning',
            title: 'Campos incompletos',
            text: 'Debe completar ambos campos.'
          });
        }

        const encontrado = usuarios.find(u => u.user === user);

        if (!encontrado) {
          return Swal.fire({
            icon: 'error',
            title: 'Usuario no encontrado',
            text: 'Verificá tu usuario o registrate.'
          });
        }

        if (encontrado.contrasenia !== password) {
          return Swal.fire({
            icon: 'error',
            title: 'Contraseña incorrecta',
            text: 'Intentalo nuevamente.'
          });
        }

        // Guardar en localStorage
        localStorage.setItem('usuarioLogueado', JSON.stringify(encontrado));

        // Mensaje de bienvenida
        Swal.fire({
          icon: 'success',
          title: `¡Bienvenido, ${encontrado.nombre}!`,
          text: 'Redireccionando a la tienda...',
          showConfirmButton: false,
          timer: 2000
        });

        // Redirección después del tiempo
        setTimeout(() => {
          window.location.href = 'productos.html';
        }, tiempo);

      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error inesperado',
          text: error.message
        });
      }
    });
  })
  .catch(error => {
    Swal.fire({
      icon: 'error',
      title: 'Error al cargar usuarios',
      text: error.message
    });
  });
