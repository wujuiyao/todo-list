$(document).ready(function(){

  var maxAppend = 0;

  $('.add-item').click(addItem);

  var allCloseButtons =['.button-0', '.button-1', '.button-2', '.button-3', '.button-4', '.button-5'];


  $('.active').on('click',allCloseButtons,function(){
    //this allCloseButtons will effect
      for(var i = 0; i <= 5; i++){
        $('.button-'+i).data('clicked', true);
        if($('.button-'+i).data('clicked')){
          $('.dropdown-'+i).slideUp();
        }
       }
    });

//**********Close Dropdown Function************
function closeButton(){

    $('.button-0').data('clicked', true);
      if($('.button-'+0).data('clicked')){
        $('.dropdown-'+0).slideUp();
      }
    $('.button-1').data('clicked', true);
      if($('.button-1').data('clicked')){
        $('.dropdown-1').slideUp();
      }
    $('.button-2').data('clicked', true);
      if($('.button-2').data('clicked')){
        $('.dropdown-2').slideUp();
      }
    $('.button-3').data('clicked', true);
      if($('.button-3').data('clicked')){
        $('.dropdown-3').slideUp();
      }
    $('.button-4').data('clicked', true);
      if($('.button-4').data('clicked')){
        $('.dropdown-4').slideUp();
      }
    $('.button-5').data('clicked', true);
      if($('.button-5').data('clicked')){
        $('.dropdown-5').slideUp();
      }
}


//**********Manage Item Function************
  function manageItems(){
      //First List
      $('.item-0').find($('[value="New Items"]')).dblclick(function(){
        $('.dropdown-0').slideDown();
      });
      $('.item-0 :checkbox').click(function(){
         if($(this).is(':checked')){
          $('.delete-list-0').show();
         } else if(!$(this).is(':checked')){
          $('.delete-list-0').hide();
         }
         $('.delete-list-0').click(function(){
           $('.item-0').remove();
         });
      });
      //Second List
      $('.item-1').find($('[value="New Items"]')).dblclick(function(){
        $('.dropdown-1').slideDown();
      });
      $('.item-1 :checkbox').click(function(){
         if($(this).is(':checked')){
          $('.delete-list-1').show();
         } else if(!$(this).is(':checked')){
          $('.delete-list-1').hide();
         }
         $('.delete-list-1').click(function(){
           $('.item-1').remove();
         });
      });
      //Third List
      $('.item-2').find($('[value="New Items"]')).dblclick(function(){
        $('.dropdown-2').slideDown();
      });
      $('.item-2 :checkbox').click(function(){
         if($(this).is(':checked')){
          $('.delete-list-2').show();
         } else if(!$(this).is(':checked')){
          $('.delete-list-2').hide();
         }
         $('.delete-list-2').click(function(){
           $('.item-2').remove();
         });
      });
      //Fourth List
      $('.item-3').find($('[value="New Items"]')).dblclick(function(){
        $('.dropdown-3').slideDown();
      });
      $('.item-2 :checkbox').click(function(){
         if($(this).is(':checked')){
          $('.delete-list-3').show();
         } else if(!$(this).is(':checked')){
          $('.delete-list-3').hide();
         }
         $('.delete-list-3').click(function(){
           $('.item-3').remove();
         });
      });
      //Fifth List
      $('.item-4').find($('[value="New Items"]')).dblclick(function(){
        $('.dropdown-4').slideDown();
      });
      $('.item-4 :checkbox').click(function(){
         if($(this).is(':checked')){
          $('.delete-list-4').show();
         } else if(!$(this).is(':checked')){
          $('.delete-list-4').hide();
         }
         $('.delete-list-4').click(function(){
           $('.item-4').remove();
         });
      });
      //Sixth List
      $('.item-5').find($('[value="New Items"]')).dblclick(function(){
        $('.dropdown-5').slideDown();
      });
      $('.item-5 :checkbox').click(function(){
         if($(this).is(':checked')){
          $('.delete-list-5').show();
         } else if(!$(this).is(':checked')){
          $('.delete-list-5').hide();
         }
         $('.delete-list-5').click(function(){
           $('.item-5').remove();
         });
      });
  }

//**********Add Item Function************
  function addItem(){

    if (maxAppend >= 5) return;

    var list =$('<li><input type="checkbox" name="" value="item" ><input type="text" name="" value="New Items" ></li>');
    var deleteButton = $('<button id="delete-list"><img src="images/delete.png" alt=""></button>');
    var dropdown =$('<div id="dropdown"><p class="quantity">Quantity:<input type="text" name="" value=""></p><p class="notes"><input type="text" name="" value="Notes:"><button>Done</button></p></div>');
    var wholeList = $(list).add(dropdown);
                    maxAppend++;

    $('.active').append(list);
    $(deleteButton).appendTo(list).hide();
    $(dropdown).appendTo(list);
    //** adding dynamic classes
    $('.active li').addClass(function(index){
      return "item-" + index;
    });
    $('.active li').find('div').addClass(function(index){
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
//   //  $(allDropdowns+i).slideUp();
