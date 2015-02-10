


$("#questions1").children(".matched").each(function(index){
     var i = index + 1;
     var mytext = $( this ).text();
     var updatedText = i.toString() + "." + mytext;
     
     $( this ).text(updatedText);
     var postEdit = $( this ).text();
     console.log( index + ": " + $( this ).text(updatedText) );
});