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
  //   // "image",
  //   // "images",
  //   // "page",
  //   // "pages",
  //   "batch",
  //   // "batches",
  //   // "folder",
  //   // "folders",
  //   // "scan",
  //   // "scanning",
  //   // "activity",
  //   // "activities",
  //   // "process",
  //   // "property",
  //   // "properties",
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
  //   "Data Format"
  // ];

  // for (let term of grooperTerms) {
  //   $('p:not(.admonition-title), .md-content li').html(function(i, html) {
  //   // $('p:not(.admonition-title), .md-content li').html(function(i, html) {
  //   // $('p, .md-content li').html(function(i, html) {
  //     var regex1, replacement;

  //     // https://stackoverflow.com/questions/7959050/use-jquery-filter-to-select-specific-text-within-div
  //     regex1 = new RegExp('(?<gname>' + term + ')', 'g');
  //     termClass = term.replace(" ", "-");
  //     replacement = `<span class='grooper-word grooper-word-${termClass}'>$<gname></span>`;

  //     return html.replace(regex1, replacement);
  //   });
  // }

});
