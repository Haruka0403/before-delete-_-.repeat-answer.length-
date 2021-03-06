'use strict';

var minCount = 1;
var maxCount = 10;

$(function(){

$('#demo-plus').on('click', function(){
  
  var inputCount = $('#demo-area .unit').length;
  if (inputCount < maxCount){
    var element = $('#demo-area .unit:last-child').clone(true);
    var inputList = element[0].querySelectorAll('input[type="datetime-local"]');
   
    for (var i = 0; i < inputList.length; i++) {
      inputList[i].value = "";
      
    }
    $('#demo-area .unit').parent().append(element);
    
  }
    var elements = document.getElementsByClassName("input-group-text");
      for(var i = 0; i < elements.length; i++){
      elements[i].textContent=String(i+1)+"回目";
    }
});


// フォーム消去
$('.demo-minus').on('click', function(){
  var inputCount = $('#demo-area .unit').length;
  if (inputCount > minCount){
    $(this).parents('.unit').remove();

//リマインド回数の表示 
  var elements = document.getElementsByClassName("input-group-text");
      for(var i = 0; i < elements.length; i++){
      elements[i].textContent=String(i+1)+"回目";
      
    }
  }
});

// edit.blade
$('#remindAt_edit').on('click', function(){
  $('#remindAt_table').hide();
  $('#remindAt_revise').hide();
  $('#remindAt_form').show();
　$('#remindAt_return').show();
　
  $('#exampleModal').modal('hide');
});

$('#remindAt_edit2').on('click', function(){
  $('#remindAt_table').show();
  $('#remindAt_revise').show();
  $('#remindAt_form').hide();
　$('#remindAt_return').hide();
　
  $('#exampleModal2').modal('hide');
});


});
