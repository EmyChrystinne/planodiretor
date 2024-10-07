let fotoIndex = 0;

function mudarFoto(n) {
  const fotos = document.querySelectorAll('.foto img');
  fotoIndex += n;
  if (fotoIndex < 0) {
    fotoIndex = fotos.length - 1;
  } else if (fotoIndex >= fotos.length) {
    fotoIndex = 0;
  }
  const galeriaContainer = document.querySelector('.galeria-container');
  galeriaContainer.style.transform = `translateX(-${fotoIndex * 50}%)`;
}

function abrirModal(index) {
  const fotos = document.querySelectorAll('.foto img');
  const modal = document.getElementById('modal');
  const modalImagem = document.getElementById('modal-imagem');

  modalImagem.src = fotos[index].src;
  modal.style.display = 'block';
}

function fecharModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Navegação com teclado
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    mudarFoto(-1);
  } else if (event.key === 'ArrowRight') {
    mudarFoto(1);
  } else if (event.key === 'Escape') {
    fecharModal();
  }
});

// Suporte a toque
let startX = null;

document.querySelector('.galeria').addEventListener('touchstart', (event) => {
  startX = event.touches[0].clientX;
});

document.querySelector('.galeria').addEventListener('touchmove', (event) => {
  if (!startX) return;

  const moveX = event.touches[0].clientX;
  const diffX = startX - moveX;

  if (diffX > 50) {
    mudarFoto(1);
    startX = null;
  } else if (diffX < -50) {
    mudarFoto(-1);
    startX = null;
  }
});
