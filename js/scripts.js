$(function(){

  $('#groceryList').submit(function(event){
    event.preventDefault();

    var userItem1 = $('#item1').val();
    var userItem2 = $('#item2').val();
    var userItem3 = $('#item3').val();

    var items = [userItem1, userItem2, userItem3];
    items.sort();

    var toUpper = items.map(function(item){
      if (item){
        item = item.toUpperCase();
        $('#output ul').append('<li>'+item+'</li>');
      }
    });


    $('#groceryList').hide();
    //alert(userItem1 + ' ' + userItem2 + ' ' + userItem3);

  });

});
