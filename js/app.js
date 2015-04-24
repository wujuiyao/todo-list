$(document).ready(function(){

  var maxAppend = 0;

  $( "button" ).click(function() {
  var text = $( this ).text();
  $( "input" ).val( text );
});

  $('.add-item').click(addItem);

  $('.active').on('click', 'li', function(){
    //check out val
    $('.button-0').data('clicked', true);
    if($('.button-0').data('clicked')){
      alert("First Button has been Clicked");
    }
    $('.button-1').data('clicked', true);
    if($('.button-1').data('clicked')){
      alert("Second has been clicked");
    }

  });




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
