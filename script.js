const imageList = [
  'img/bild1.jpg',
  'img/bild2.jpg',
  'img/bild3.jpg'
];

const imageEl = document.getElementById('randomImage');

function showRandomImage() {
  const randomIndex = Math.floor(Math.random() * imageList.length);
  imageEl.src = imageList[randomIndex];
}

showRandomImage();
imageEl.addEventListener('click', showRandomImage);