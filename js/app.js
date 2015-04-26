$(document).ready(function(){

  var maxAppend = 0;

  $('.add-item').click(addItem);
  $('.active').on('mouseenter', manageItems);

  function manageItems(){
      $('li').find('.button-0').click(function(){
        event.stopPropagation();
        $('.dropdown-0').slideUp();
      });
      $('.item-0').find($('[value="New Items"]')).dblclick(function(){
        $('.dropdown-0').slideDown();
      });

      $('li').find('.button-1').click(function(){
        event.stopPropagation();
        $('.dropdown-1').slideUp();
      });
      $('.item-1').find($('[value="New Items"]')).dblclick(function(){
        $('.dropdown-1').slideDown();
      });

      $('li').find('.button-2').click(function(){
        event.stopPropagation();
        $('.dropdown-2').slideUp();
      });
      $('.item-2').find($('[value="New Items"]')).dblclick(function(){
        $('.dropdown-2').slideDown();
      });

      $('li').find('.button-3').click(function(){
        event.stopPropagation();
        $('.dropdown-3').slideUp();
      });
      $('.item-3').find($('[value="New Items"]')).dblclick(function(){
        $('.dropdown-3').slideDown();
      });

      $('li').find('.button-4').click(function(){
        event.stopPropagation();
        $('.dropdown-4').slideUp();
      });
      $('.item-4').find($('[value="New Items"]')).dblclick(function(){
        $('.dropdown-4').slideDown();
      });

      $('li').find('.button-5').click(function(){
        event.stopPropagation();
        $('.dropdown-5').slideUp();
      });
      $('.item-5').find($('[value="New Items"]')).dblclick(function(){
        $('.dropdown-5').slideDown();
      });
  }

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
