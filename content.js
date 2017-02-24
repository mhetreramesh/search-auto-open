function startSearching() {
  var links = $("div.g h3.r a").map(function() {
          return this.href;
  }).get();
  var filteredLinks = [];
  $.each(links, function( index, value ) {
    if(3 > filteredLinks.length && value !== undefined) {
        if (~value.indexOf("stackoverflow.com") || ~value.indexOf("quora.com")) {
          filteredLinks.push(value);
          links.splice(index,1);
        }
    }
    //console.log( index + ">> " + value );
  });
  if (3 != filteredLinks.length) {
    $.each(links, function( index, value ) {
      if(3 > filteredLinks.length) {
          filteredLinks.push(value);
          links.splice(index,1);
      }
      //console.log( index + ">> " + value );
    });
  }
  $.each(filteredLinks, function(index, link) {
    chrome.runtime.sendMessage({"message": "open_new_tab", "url": link});
  });
  //chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
};

window.setTimeout( startSearching, 1800 );

$('#sfdiv button.sbico-c').on('click', function() {
  window.setTimeout( startSearching, 1800 );
});

$('#lst-ib').live('keypress', function (e) {
  alert(e.which);
         if(e.which === 13){

            //Disable textbox to prevent multiple submit
            window.setTimeout( startSearching, 1800 );

            //Do Stuff, submit, etc..
         }
   });
