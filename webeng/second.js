google.load("books", "0");

    function initialize() {
      var display_options = {showLinkChrome: false};
      var viewer = new   google.books.DefaultViewer(document.getElementById('viewerCanvas2'),display_options);

	   viewer.load('Ql6QgWf6i7cC', bookNotFound, removePreviewFooter);
    }

    function bookNotFound() {
      document.getElementById('viewerCanvas2').innerHTML="<h1>No Preview!</h1>";
    }       

    function removePreviewFooter() {
      $('#viewerCanvas2 > div > div:nth-child(2)').css('display','none');
    }

    google.setOnLoadCallback(initialize);