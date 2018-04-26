document.getElementById('form').addEventListener('submit', saveBookmark);

function saveBookmark(e){

var siteName = document.getElementById('siteName').value;
var siteValue = document.getElementById('siteUrl').value;

var bookmarks = {
    name: siteName,
    url: siteValue
}





if(localStorage.getItem('bookmark') ===  null)
{
    var bookmark = [];
    bookmark.push(bookmarks);
localStorage.setItem('bookmark',JSON.stringify( bookmark))

}
else
{
   
 var bookmark  = JSON.parse(localStorage.getItem('bookmark'));
 
 bookmark.push(bookmarks);
 localStorage.setItem('bookmark',JSON.stringify( bookmark))

 
}
}

function deleteBookmark(url){
    // Get bookmarks from localStorage
    var bookmark = JSON.parse(localStorage.getItem('bookmark'));
    // Loop through the bookmarks
    for(var i =0;i < bookmark.length;i++){
      if(bookmark[i].url == url){
        // Remove from array
        bookmark.splice(i, 1);
      }
    }
    // Re-set back to localStorage
    localStorage.setItem('bookmark', JSON.stringify(bookmark));
  
 
    fetchBookmark();
  }

function fetchBookmark(){
    var bookmarkObject  = JSON.parse(localStorage.getItem('bookmark'));
    

    var bookmarkResults = document.getElementById('bookmarkResults');
    bookmarkResults.innerHTML = "";

    
    for( var i =0; i < bookmarkObject.length; i++){
       
        var name = bookmarkObject[i].name;
        var url = bookmarkObject[i].url;

    


                                      bookmarkResults.innerHTML += '<div class="well">'+
                                  '<h3>'+name+
                                  ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> ' +
                                  ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
                                  '</h3>'+
                                  '</div>';
    }
      
}