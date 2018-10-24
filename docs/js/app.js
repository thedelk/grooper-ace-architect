// RegexColorizer.colorizeAll('codehilite');
document.addEventListener("DOMContentLoaded", function() { 
  var images = document.querySelectorAll('p > a');
  images.className = 'glightboxTest';
  
  var lightboxDescription = GLightbox({
    selector: 'glightboxTest'
  });
});

