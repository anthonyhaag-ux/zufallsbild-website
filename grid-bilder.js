document.addEventListener('DOMContentLoaded', () => {
  const imageList = [];
  const totalImages = 24;
  const gridSize = 24;

  for (let i = 1; i <= totalImages; i++) {
    imageList.push(`img/Bild${i}.jpg`);
  }

  // Bilder mischen
  for (let i = imageList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imageList[i], imageList[j]] = [imageList[j], imageList[i]];
  }

  const grid = document.getElementById('grid');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  const imagesToShow = imageList.slice(0, gridSize);

  imagesToShow.forEach(src => {
    const tile = document.createElement('div');
    tile.className = 'tile';

    const img = document.createElement('img');
    img.src = src;
    img.alt = "Zufallsbild";

    img.addEventListener('click', () => {
      lightboxImg.src = src;
      lightbox.style.display = 'flex';
    });

    tile.appendChild(img);
    grid.appendChild(tile);
  });

  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
  });
});
