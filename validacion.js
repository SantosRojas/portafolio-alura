const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  if (validateForm()) {
    // Si la validación es exitosa, puedes enviar el formulario aquí o realizar otras acciones
    form.submit();
  }
});

function validateForm() {
  const name = document.getElementById('textNombre').value;
  const email = document.getElementById('textEmail').value;
  const subject = document.getElementById('textAsunto').value;
  const message = document.getElementById('mensagem').value;

  if (name.trim() === '' || email.trim() === '' || subject.trim() === '' || message.trim() === '') {
    // Verifica si alguno de los campos está vacío
    alert('Por favor, completa todos los campos.');
    return false;
  }

  // Verifica el formato del correo electrónico utilizando una expresión regular
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, ingresa un correo electrónico válido.');
    return false;
  }

  // Si todo es válido, se retorna true
  return true;
}
