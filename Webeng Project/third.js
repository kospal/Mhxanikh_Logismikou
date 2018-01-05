google.load("books", "0");

    function initialize() {
      var display_options = {showLinkChrome: false};
      var viewer = new   google.books.DefaultViewer(document.getElementById('viewerCanvas3'),display_options);

	   viewer.load('Swlcw7M4uD8C', bookNotFound, removePreviewFooter);
    }

    function bookNotFound() {
      document.getElementById('viewerCanvas3').innerHTML="<h1>No Preview!</h1>";
    }       

    function removePreviewFooter() {
      $('#viewerCanvas3 > div > div:nth-child(2)').css('display','none');
    }

    google.setOnLoadCallback(initialize);