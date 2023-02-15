// Selecciona todas las tarjetas
const cards = document.querySelectorAll(".card");


// Selecciona todas las tarjetas
const tarjetas = document.querySelectorAll('.card');

// Agrega un evento de clic a cada tarjeta
tarjetas.forEach(tarjeta => {
  // Selecciona la etiqueta de fecha dentro de la tarjeta
  const fecha = tarjeta.querySelector('.fecha');

  // Agrega un evento de clic a la tarjeta
  tarjeta.addEventListener('click', () => {
    // Si la etiqueta de fecha está oculta, muéstrala
    if (fecha.style.display === 'none') {
      fecha.style.display = 'block';
    } else {
      // De lo contrario, ocúltala
      fecha.style.display = 'none';
    }
  });
});
