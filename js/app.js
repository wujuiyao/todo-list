$(document).ready(function(){

  var maxAppend = 0;

  $('.add-item').click(addItem);

  $('.active').on('click','button', function(){
    for(var i = 0; i <= 20; i++){
      if($(this).is('.button-'+i)){
        $('.dropdown-'+i).slideUp();
      }
    }
  });

  $('.active').on('dblclick','.items [value="New Items"]',function(){
    for(var a = 0; a <= 20; a++){
      if($(this).is('.item-'+a+' [value="New Items"]')){
        $('.dropdown-'+a).slideDown();
      }
    }
  });

  $('.active').on('click','.items :checkbox',function(){
    for(var b = 0; b <= 20; b++){
      if($(this).is('.item-'+b+' :checked')){
       $('.delete-list-'+b).show();
     }else if(!$(this).is('.item-'+b+' :checked')){
       $('.delete-list-'+b).hide();
      }
    }
  });

$('.active').on('click','.delete-list',function(){
  for (var c = 0; c <= 20; c++){
    if($(this).is('.delete-list-'+c)){
      $('.item-'+c).remove();
    }
  }
});

//**********Add Item Function************
  function addItem(){

    var list =$('<li class="items"><input type="checkbox" name="" value="item" ><input type="text" name="" value="New Items" ></li>');
    var deleteButton = $('<button id="delete-list" class="delete-list"><img src="images/delete.png" alt=""></button>');
    var dropdown =$('<div id="dropdown" class="dropdown"><p class="quantity">Quantity:<input type="text" name="" value=""></p><p class="notes"><input type="text" name="" value="Notes:"><button>Done</button></p></div>');
    var wholeList = $(list).add(dropdown);
                    maxAppend++;

    if (maxAppend >= 20){
      return;
    }

    $('.active').append(list);
    $(deleteButton).appendTo(list).hide();
    $(dropdown).appendTo(list);
    //** adding dynamic classes
    $('.active li').addClass(function(index){
      return "item-" + index;
    });
    $('.active li').find('#dropdown').addClass(function(index){
      return "dropdown-" + index;
    });

    $('.active li').find('#dropdown button').addClass(function(index){
      return "button-" + index;
    });
    $('.active li').find('#delete-list').addClass(function(index){
      return "delete-list-" + index;
    });
    //**End
    $('.active [value="New Items"]').focus();
  }
});
