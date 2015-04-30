$(document).ready(function(){

  var maxAppend = 0;

  $('.add-item').click(addItem);

  for (var i = 0; i <= 5; i++){
    $('.active').on('click','.button-'+i, function(){
        $(this).parentsUntil('.details').slideUp();
    });
  }

  for (var a = 0; a <= 5; a++){
    $('.active').on('dblclick','.item-'+a+' [value="New Items"]',function(){
      $('.dropdown, .notes').show();
    });
  }

  $('.item-0 :checkbox').on('click',function(){
    if($(this).is(':checked')){
     $('.delete-list-0').show();
    } else if(!$(this).is(':checked')){
     $('.delete-list').hide();
    }
    $('.delete-list-0').click(function(){
      $('.item-0').remove();
    });
  });


//**********Add Item Function************
  function addItem(){

    if (maxAppend >= 5) return;

    var list =$('<li><input type="checkbox" name="" value="item" ><input type="text" name="" value="New Items" ></li>');
    var deleteButton = $('<button id="delete-list" class="delete-list"><img src="images/delete.png" alt=""></button>');
    var dropdown =$('<div class="details"><div id="dropdown" class="dropdown"><p class="quantity">Quantity:<input type="text" name="" value=""></p><p class="notes"><input type="text" name="" value="Notes:"><button>Done</button></p></div></div>');
    var wholeList = $(list).add(dropdown);
                    maxAppend++;

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

//    var allDropdowns = '.dropdown-';
//    $(allDropdowns+i).slideUp();

// for(var i = 0; i <= 5; i++){
//   $('.button-'+i).data('clicked', true);
//   if($('.button-0').data('clicked')){
//     $('.dropdown-0').slideUp();
//   }
//   if($('.button-1').data('clicked')){
//     $('.dropdown-1').slideUp();
//   }
//  }

// for(var i = 0; i <= 5; i++){
//   $('.button-'+i).data('clicked', true);
//   if($('.button-'+i).data('clicked')){
//     $('.dropdown-'+i).slideUp();
//   }
//
//  }


// $('.active').on('click','.button-0',function(){
//   $('.dropdown-0').slideUp();
//   });
