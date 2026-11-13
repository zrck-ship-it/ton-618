document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('formulario-contacto');
  if (formulario) {
    formulario.addEventListener('submit', function (evento) {
      evento.preventDefault();
      alert('¡Gracias por tu mensaje! Este formulario es solo una demostración y no guarda ni envía datos.');
      formulario.reset();
    });
  }
});
