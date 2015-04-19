$(document).ready(function(){
  //hide the initial html
  $('.selected').hide();
  $('.standard').hide();
  $('.active #dropdown').hide();
  var dropdown = '<div id="dropdown"><p class="quantity">Quantity:<input type="text" name="quantity" value=""></p><p class="notes"><input type="text" name="notes" value="Notes:"><button id="done">Done</button></p></div>';

  // Add a ‘New List’ (by clicking on the Add-Item Button)
    $('.add-item').on('click', function(){
      addNewList();
    });
  //*** Function: Add new List
  function addNewList(){
  // list variable
  var newList = $('.active li').length;
    if(newList <= 5){
      console.log($('.active #item-'+newList+''));
      console.log($('.active #target-'+newList+''));
      $('.active').append('<li><input type="checkbox" name="" value="item" id="item-'+newList+'"><input type="text" name="" value="New Items" id="target-'+newList+'"></li><br>');
      $(dropdown).appendTo($('.active'));
      $('.active #target-'+newList+'').focus();
    }
    //jquery that activates the details, delegate jquery
    //Show details of each item
    $('.active').on('dblclick','li',function(){
     $('.active #dropdown').show().appendTo(this);
    });

    //Checked the tickbox
    //use the val from jquery
    $('.active').on('checked','input:checkbox', function(){
      $('.active li').append('<button><img src="images/delete.png" alt=""></button>');
     });
  }

//*** Function: Hide Details
  $('#done').click(function(){
    $('.active #dropdown').hide("slow");
  });


});

//
// 1.2 The user clicks out of the ‘Item List’ area
// 1.2.1 The detailed part will go away
//
// 1.3 The user clicks on the “Done” Button
// 1.3.1 The detailed part will go away


  //use prepend to add the x arrow if they click on the selected
  //use focus jquery api

  //mouseenter
  //click
  //dbclick
  //focusin()
  //focusout()
  //hover()
  //toggle
  //use the val() to create a max item list

  // <div id="dropdown"><p action="" class="quantity">Quantity:<input type="text" name="quantity" value=""></p><p action="" class="notes"><input type="text" name="notes" value="Notes:"><button>Done</button></p></div>
  // .append('<li><input type="checkbox" name="" value="item" id="item-'+newList+'"><input type="text" name="" value="New Items" id="target"></li><br>');
  //slideUp();
