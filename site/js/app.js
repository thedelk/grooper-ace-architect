$(document).ready(function ()
{
  $('p > img').each(function ()
  {
    // Add class to images
    // $(this).addClass('glightbox');
    
    
    
    // TESTING
    /////////////////////////////////////////
    
    $(this).wrap(`<a class="glightbox5" href="${$(this).prop('src')}"></a>`)
    
    
    
    
    
    
    /////////////////////////////////////////
    // END TESTING
    
    
    
  });
  
  var lightbox = GLightbox();
  var lightboxDescription = GLightbox({
    selector: 'glightbox5'
  });
});
