document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.gallery>img');
    var modal = document.getElementById('modal');
    var modalImage = document.getElementById('modal-image');
  
    images.forEach(function(image) {
      image.addEventListener('click', function() {
        var imageSrc = this.src;
        modalImage.src = imageSrc;
        modal.style.display = 'flex';
      });
    });
  
    modal.addEventListener('click', function(event) {
      if (event.target.id === 'modal') {
        closeModal();
      }
    });
  
    function closeModal() {
      modal.style.display = 'none';
    }
  });
  
  