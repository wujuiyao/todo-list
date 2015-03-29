//What to do with Add item


$(document).ready(function(){
  console.log("ready!");
  //hide the initial html
  $('.selected').hide();
  $('.standard').hide();
  //$('.active').hide();

  // 1.Add an New Item (detailed)
  $('.add-item').click(function(){
    console.log('Add Item clicked');
    $('.active').append('<li><form action=""><input type="checkbox" name="" value="item"><input type="text" name="" value="New Items"></form><div id="dropdown"><form action="" class="quantity">Quantity:<input type="text" name="quantity" value=""></form><form action="" class="notes"><input type="text" name="notes" value="Notes:"><button>Done</button></form></div>');
  });
    //1.1 Focus the Mouse Cursor in 'New Item' input (always the latest Add Item click)
    //1.1.1 The users click multiple time on the 'Add-Item' Button.
          //Only the latest Item will with all details and the rest item should be the standard
      //1.2 If the user clicks outside the 'New Item' content, the detailed info fades away.
      //1.2.1 and if the user clicks on the "Done" the detailed info fades away
      
  //use prepend to add the x arrow if they click on the selected
  //use focus jquery api
});
