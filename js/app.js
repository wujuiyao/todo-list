$(document).ready(function(){

  $('.add-item').on('click.createList', function(evt){

    var newList = $('.active li').length;
    var list ='<li id="item-'+newList+'"><input type="checkbox" name="" value="item" ><input id="target-'+newList+'" type="text" name="" value="New Items" ></li><br>';
    var dropdown = '<div class="dropdown-'+newList+'" id="dropdown"><p class="quantity">Quantity:<input type="text" name="" value=""></p><p class="notes"><input type="text" name="" value="Notes:"><button id="done">Done</button></p></div>';
    // var wholeList = $(list).add(dropdown);

    if(newList <= 5){
      $('.active').append(list);
      $('.active [value="New Items"]').focus();
      if($('.active [value="New Items"]').is(':focus')){
          console.log("there is something in focus");
      }
    }
    if(newList >=5){
      $('.add-item').off('click.createList');
      alert("no more than 6 please");
    }

  });



});

//$('.active').on("click","li", function(evt){
//    alert($(this).text());
//});

//
// 1.2 The user clicks out of the ‘Item List’ area
// 1.2.1 The detailed part will go away
//
// 1.3 The user clicks on the “Done” Button
// 1.3.1 The detailed part will go away


  // use this to check if is true of false prop = property
  //$('...').prop()
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
