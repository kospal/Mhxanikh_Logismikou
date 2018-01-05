 google.load("books", "0");

    function initialize() {
      var display_options = {showLinkChrome: false};
      var viewer = new   google.books.DefaultViewer(document.getElementById('viewerCanvas5'),display_options);

	   viewer.load('8y9MDgAAQBAJ', bookNotFound, removePreviewFooter);
    }

    function bookNotFound() {
      document.getElementById('viewerCanvas4').innerHTML="<h1>No Preview!</h1>";
    }       

    function removePreviewFooter() {
      $('#viewerCanvas5 > div > div:nth-child(2)').css('display','none');
    }

    google.setOnLoadCallback(initialize);