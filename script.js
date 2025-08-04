const imageList = [
  'img/bild1.jpg',
  'img/bild2.jpg',
  'img/bild3.jpg'
];

function getRandomImage(exclude) {
  let filtered = imageList;
  if (exclude) {
    filtered = imageList.filter(img => img !== exclude);
  }
  const randomIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randomIndex];
}

function showRandomImages() {
  const img1 = getRandomImage();
  const img2 = getRandomImage(img1); // damit es zwei unterschiedliche sind

  document.getElementById('img1').src = img1;
  document.getElementById('img2').src = img2;
}

document.getElementById('img1').addEventListener('click', showRandomImages);
document.getElementById('img2').addEventListener('click', showRandomImages);

// Initialer Aufruf
showRandomImages();