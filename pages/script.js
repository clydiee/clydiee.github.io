const images = ['j (1)', 'j (2)', 'j (3)'];
let currentIndex = 0;

const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const currentImage = document.getElementById('current-image');

prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

function showPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

function updateImage() {
  const imagePath = images[currentIndex];
  currentImage.src = imagePath;
  currentImage.alt = `Image ${currentIndex + 1}`;
}

// Initialize with the first image
updateImage();
