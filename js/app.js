//What to do with Add item


$(document).ready(function(){
  console.log("ready!");
  //hide the initial html
  $('.selected').hide();
  $('.standard').hide();
  $('.active #dropdown').hide();

//*** Function: Add new List
  function addNewList(){
  // Variable for counting the lists
  var newList = $('.active li').length;
    if(newList <= 5){
      console.log($('.active #item-'+newList+''));
      $('.active').append('<li><input type="checkbox" name="" value="item" id="item-'+newList+'"><input type="text" name="" value="New Items" id="target"></li><br>');
      $('.active #dropdown').show().appendTo($('.active'));
      $('.active #target').focus();
    }
  }
//*** Function: Hide Details
  function hideDetail(){
    $('#done').click(function(){
      $('.active #dropdown').hide("slow");
    });
  }

//*** Function: Show Details
  function showDetail(){
    $('.active #target').dblclick(function(){
    $(this).data('clicked', true);
    if($('.active #target').data('clicked')){
      $('.active #dropdown').show("fast");
    }});
   }


// Add a ‘New List’ (by clicking on the Add-Item Button)
  $('.add-item').on('click', function(){
    addNewList();
    hideDetail();
    showDetail();
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
