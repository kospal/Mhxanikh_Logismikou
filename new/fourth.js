google.load("books", "0");

    function initialize() {
      var display_options = {showLinkChrome: false};
      var viewer = new   google.books.DefaultViewer(document.getElementById('viewerCanvas4'),display_options);

	   viewer.load('2RYN9exiTnYC', bookNotFound, removePreviewFooter);
    }

    function bookNotFound() {
      document.getElementById('viewerCanvas4').innerHTML="<h1>No Preview!</h1>";
    }       

    function removePreviewFooter() {
      $('#viewerCanvas4 > div > div:nth-child(2)').css('display','none');
    }

    google.setOnLoadCallback(initialize);