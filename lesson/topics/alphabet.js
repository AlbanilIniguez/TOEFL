function initAlphabet() {
  const buttons = document.querySelectorAll('.card');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const letter = button.getAttribute('data-letter').toLowerCase();
      const audio = new Audio('sounds/' + letter + '.mp3');  // ruta RELATIVA a alphabet.html
      audio.play().catch(err => {
        console.error(`Error al reproducir el sonido ${letter}.mp3`, err);
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', initAlphabet);
