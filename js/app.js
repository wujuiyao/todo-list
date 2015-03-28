//What to do with Add item


$(document).ready(function(){
  console.log("ready!");
  //By default show only 2 examples. Use jquery code to this
  // $('.selected').hide();
  // $('.standard').hide();
  // $('.active').hide();
  //The user clicks on the "Add Item"
  $('.add-item').click(function(){
    //The active (html) need to show up
    $('.active').show();
    //the mouse cursor should be directly in the active version.

  });
});
