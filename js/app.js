//What to do with Add item


$(document).ready(function(){

  console.log("ready!");
  //By default show only 2 examples. Use jquery code to this
   $('.selected').hide();
   $('.standard').hide();
   $('.active').hide();
  //The user clicks on the "Add Item"
  $('body').on('click', '.add-item', function(){
    console.log("testing");
  });

  //use prepend to add the x arrow if they click on the selected
});
