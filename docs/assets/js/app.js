$(document).ready(function ()
{
  $('p > img').each(function ()
  {
    $(this).wrap(`<a class="lightbox" href="${$(this).prop('src')}"></a>`);
  });
  
  var lightbox = GLightbox();
  var lightboxDescription = GLightbox({
    selector: 'lightbox'
  });
});
