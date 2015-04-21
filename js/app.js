$(document).ready(function(){

  var maxAppend = 0;

  $('.add-item').on('click', addItem);


  function addItem(){
    if (maxAppend >= 6) return;
    var newList = $('#item-'+newList+'').length;
    var dropdownList = $('.active .dropdown-'+newList+'').length;
    var list =$('<li id="item-'+newList+'"><input type="checkbox" name="" value="item" ><input id="target-'+newList+'" type="text" name="" value="New Items" ></li>');
    var dropdown =$('<div class="dropdown-'+newList+'" id="dropdown"><p class="quantity">Quantity:<input type="text" name="" value=""></p><p class="notes"><input type="text" name="" value="Notes:"><button>Done</button></p></div>');
    var wholeList = $(list).add(dropdown);
                    maxAppend++;

    $('.active').append(wholeList);
    //use each to iterate over these and add new classes
    //generating class dynamically in jquery

    $('.active [value="New Items"]').val();
    $('.active [value="New Items"]').focus();
  }

  //argument passing

//once the the add has been clciked return the list number

});

//$('.active').on("click","li", function(evt){
//    alert($(this).text());
//});

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
