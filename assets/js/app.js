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
  
  
  // ---------------------------------
  // TESTING
  // ---------------------------------
  // const grooperTerms = [
  //   "image",
  //   "images",
  //   "page",
  //   "pages",
  //   "batch",
  //   "batches",
  //   "folder",
  //   "folders",
  //   "scan",
  //   "scanning",
  //   "activity",
  //   "activities",
  //   "property",
  //   "properties",
  //   "Lexicon",
  //   "Batch Process",
  //   "Scan Profile",
  //   "IP Profile",
  //   "Separation Profile",
  //   "OCR Profile",
  //   "Data Type",
  //   "Field Class",
  //   "Data Field",
  //   "Data Model",
  //   "(data model)",
  //   "(local resources)",
  //   "Content Model",
  //   "Data Format",
  //   "Process"
  // ];

  // for (let term of grooperTerms) {
  //   $('p, .md-content li').html(function(i, html) {
  //     var regexp, replacement;

  //     // https://stackoverflow.com/questions/7959050/use-jquery-filter-to-select-specific-text-within-div
  //     regexp = RegExp(`(${term})`, 'g');
  //     termClass = term.replace(" ", "-");
  //     replacement = `<span class='grooper-word grooper-word-${termClass}'>$1</span>`;

  //     return html.replace(regexp, replacement);
  //   });
  // }

});
