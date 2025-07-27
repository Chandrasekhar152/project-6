document.addEventListener("DOMContentLoaded", function() {
  const galleryImages = document.querySelectorAll('.gallery-image');
  const modalImage = document.getElementById('modalImage');
  const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));

  galleryImages.forEach(image => {
    image.addEventListener('click', () => {
      modalImage.src = image.src;
      imageModal.show();
    });
  });
});
