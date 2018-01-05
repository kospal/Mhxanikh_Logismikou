google.load("books", "0");

    function initialize() {
      var display_options = {showLinkChrome: false};
      var viewer = new   google.books.DefaultViewer(document.getElementById('viewerCanvas'),display_options);

      viewer.load('mvzgNSmHEUAC', bookNotFound, removePreviewFooter);
    }

    function bookNotFound() {
      document.getElementById('viewerCanvas').innerHTML="<h1>No Preview!</h1>";
    }       

    function removePreviewFooter() {
      $('#viewerCanvas > div > div:nth-child(2)').css('display','none');
    }

    google.setOnLoadCallback(initialize);
   
