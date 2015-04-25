$(document).ready(function(){

  var maxAppend = 0;

  $('.add-item').click(addItem);

  $('.active').on('mouseenter', function(){

      $('li').find('.button-0').click(function(){
        event.stopPropagation();
        console.log('button-0 has been clicked');
      });

      $('li').find('.button-1').click(function(){
        event.stopPropagation();
        console.log('button-1 has been lcicked');
      });

      $('li').find('.button-2').click(function(){
        event.stopPropagation();
        console.log('Button-2 has been clicked');
      });

      $('li').find('.button-3').click(function(){
        event.stopPropagation();
        console.log("button-3");
      });

      $('li').find('.button-4').click(function(){
        event.stopPropagation();
        console.log("Button-4");
      });

      $('li').find('.button-5').click(function(){
        event.stopPropagation();
        console.log("Button-5");
      });

  });

  function addItem(){
    if (maxAppend >= 6) return;

    var list =$('<li><input type="checkbox" name="" value="item" ><input type="text" name="" value="New Items" ></li>');
    var dropdown =$('<div id="dropdown"><p class="quantity">Quantity:<input type="text" name="" value=""></p><p class="notes"><input type="text" name="" value="Notes:"><button>Done</button></p></div>');
    var wholeList = $(list).add(dropdown);
                    maxAppend++;

    $('.active').append(list);
    $(dropdown).appendTo(list);
    //** adding dynamic classes
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
    $('.active [value="New Items"]').focus();
  }
});
