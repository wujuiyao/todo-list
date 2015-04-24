$(document).ready(function(){

  var maxAppend = 0;
  var buttonArr = ['.button-0','.button-1','.button-2','button-3','button-4','button-5'];


  $('.add-item').click(addItem);


  //try one using each, one using idea from Nicholas.

  function addItem(){
    if (maxAppend >= 6) return;

    var list =$('<li><input type="checkbox" name="" value="item" ><input type="text" name="" value="New Items" ></li>');
    var dropdown =$('<div id="dropdown"><p class="quantity">Quantity:<input type="text" name="" value=""></p><p class="notes"><input type="text" name="" value="Notes:"><button>Done</button></p></div>');
    var wholeList = $(list).add(dropdown);
                    maxAppend++;

    $('.active').append(list);
    $(dropdown).appendTo(list);
    //** adding classes for further reference
    $('.active li').addClass(function(index){
      return "item-" + index;
    });
    $('.active li').find('div').addClass(function(index){
      return "dropdown-" + index;
    });
    $('.active li').find('button').addClass(function(index){
      return "button-" + index;
    });
    //**End
    // Focus on the added Item
    $('.active [value="New Items"]').focus();
  }
});
