//What to do with Add item


$(document).ready(function(){
  console.log("ready!");
  //the html first
  $('.selected').hide();
  $('.standard').hide();
  //$('.active').hide();
  //Add Item Function
  function addNewItem(){
    $('.active').append('<li><form action=""><input type="checkbox" name="" value="item"><input type="text" name="" value="New Items"></form><div id="dropdown"><form action="" class="quantity">Quantity:<input type="text" name="quantity" value=""></form><form action="" class="notes"><input type="text" name="notes" value="Notes:"><button>Done</button></form></div>');
  }
  // tryout one
  //Capture the click event on the "Add Item" Button
    //  $('.add-item').click(function(){
    //    console.log(newList);
    //    //Add the first active list
    //    //Add more lists on more clicks
    //    $(this).on('click', '.active li', function(){
    //      $('.active').append($('.active li'));
    //    });
    // });

  // //tryout 2
  // $('.add-item').click(function(){
  //   $('.active').append($('.active li'));
  // });

  // tryout 3
  $('.add-item').click(function(){
    addNewItem();
  });
  //use prepend to add the x arrow if they click on the selected
  //use focus jquery api
});
