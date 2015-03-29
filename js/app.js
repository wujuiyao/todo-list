//What to do with Add item


$(document).ready(function(){

  console.log("ready!");
  //By default show only 2 examples. Use jquery code to this
   $('.selected').hide();
   $('.standard').hide();
   $('.active').hide();

  //Capture user's click event
  $('body').on('click', '.add-item', function(){
    console.log("Testing");
    //add one active list
    $('.active').show();
  });


  //use prepend to add the x arrow if they click on the selected
  //use focus jquery api
});
