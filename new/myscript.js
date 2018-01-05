$(document).ready(function(){	

   $("#myform").submit(function(){

   	  var search = $("#books").val();
   	  if(search == "" || search !="php" && search!="java" && search!="visual basic" && search!="javascript")
   	  {
		  
   	  	alert("Δεν έχετε εισάγει σωστό ερώτημα.");
		location.reload(true);
	
   	  }
	  
   	  else{		
   	  var url = "";
   	  var img = "";
      var title = "";
      var author = "";
	  var cat = "";
	  var publisher = "";
	  var year = "";
	  var rating= "";
	  

   	   $.get("https://www.googleapis.com/books/v1/volumes?q="  + search,function(response){

		console.log(response);
		
		
          for(i=0;i<response.items.length;i++)
          {
           title=$('<h5 class="center-align black-text">' + response.items[i].volumeInfo.title + '</h5>'); 
		   publisher=$('<h5 class="center-align black-text">Publisher:' + response.items[i].volumeInfo.publisher +'</h5>');
		   rating=$('<h5 class="center-align black-text">Rating:' + response.items[i].volumeInfo.averageRating +'</h5> <br/><br/><br/>');
		   year=$('<h5 class="center-align black-text">Year:'+ response.items[i].volumeInfo.publishedDate +'</h5>');
		   cat=$('<h5 class="center-align black-text">Category:' + response.items[i].volumeInfo.categories +'</h5>');
           author=$('<h5 class="center-align black-text"> By:' + response.items[i].volumeInfo.authors + '</h5>');
		   img = $('<img class="aligning card z-depth-5" id="dynamic"><br><a href=' + response.items[i].volumeInfo.infoLink + '><button id="imagebutton" class="btn red aligning">Read More</button></a>'); 
           url= response.items[i].volumeInfo.imageLinks.thumbnail;
           img.attr('src', url);
           title.appendTo('#result');
           author.appendTo('#result');
		   cat.appendTo('#result');
		   img.appendTo('#result');
		   publisher.appendTo('#result');
		   year.appendTo('#result');
		   rating.appendTo('#result');
		  
          }
   	  });
      
      }
      return false;
   });

});

