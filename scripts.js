const enlargedImage = document.querySelector('.enlarged-image');
const originalImage = document.getElementById('enlarge-image');

originalImage.addEventListener('click', () => {
  enlargedImage.classList.toggle('active'); // Toggle active class for enlarged image
});
