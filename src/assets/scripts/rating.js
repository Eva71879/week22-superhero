document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
  
    stars.forEach(star => {
      star.addEventListener('click', function() {
        const index = parseInt(this.getAttribute('data-index'));
        setRating(index);
      });
    });  

    const savedRating = localStorage.getItem('rating');
    if (savedRating) {
      setRating(parseInt(savedRating));
    }
  });
  
  function setRating(index) {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, i) => {
      star.classList.toggle('selected', i < index);
    });
    
    localStorage.setItem('rating', index);
  }
  