//What to do with Add item


$(document).ready(function(){
  console.log("ready!");
  //hide the initial html
  $('.selected').hide();
  $('.standard').hide();
  //$('.active').hide();

//   1. Add a ‘New List’ (by clicking on the Add-Item Button)
  $('.add-item').click(function(){
    console.log('Add Item clicked');
    //1.1 Set a var for the all the added list
    var newList = $('.active li').length;
    console.log('item'+-newList);
    //Set var for current list
    var currentList = newList;
    //Set var for prev list
    var prevList = newList-1;
    //1.2 Set a max list of 6
    if(newList <= 5){
      $('.active').append('<li><input type="checkbox" name="" value="item" id="item-'+newList+'"><input type="text" name="" value="New Items" id="target"><div id="dropdown"><p action="" class="quantity">Quantity:<input type="text" name="quantity" value=""></p><p action="" class="notes"><input type="text" name="notes" value="Notes:"><button>Done</button></p></div></li>')
      .css("border-bottom", "2px solid #e8e8e8");
      console.log($('.active #item-'+newList+''));
      //1.1.1 Mouse should be focused on the ‘New Item Text Input Bar’
      $('.active #target').focus();
      // 1.1.2 Previous created List will only show the basic list
      if(newList === 1){
        $('.active').hasClass('#item0 #dropdown').hide();
      }else if(newList === 2){
      }else if(newList === 3){
      }else if(newList === 4){
      }

    }

    //1.3 Create an Alert that you can only set 6 List for now
    var count = 0;
    $('.add-item').click(function(){
      count += 1;
      if (count == 6){
        alert("Sorry you can only have 6 Items for now!");
      }
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

  //slideUp();
});
