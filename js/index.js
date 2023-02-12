var imagenes = document.getElementsByClassName('imagenAmpliable');

Array.from(imagenes).forEach(function(imagen) {
  imagen.addEventListener('mouseover', function() {
    // Acción para ampliar la imagen
    imagen.style.width = '75%';
    /* imagen.style.height = '100%'; */
  });
  imagen.addEventListener('mouseout', function() {
    // Acción para reducir la imagen
    imagen.style.width = '50%';
    /* imagen.style.height = '80%'; */
  });
});