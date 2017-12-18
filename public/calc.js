$(document).ready(function(e){
  console.log('Loaded');
});
var num;
var number;
var op;

$('.number').click(function(e) {
$('#display').text($('#display').text() + $(this).text())
});
    $('#clear').click(function(e) {
      $('#display').text("");
    });

    function clr() {
        $('#display').text("");
    }
$('.operator').click(function(e) {
  var ops = $(this).text();

  if(ops !== '='){
     num = $('#display').text();
     console.log(num);
     clr();
   }
   else if(ops === '='){
     number = $('#display').text();
     console.log(number);
   }
   function calc(){
       switch (op) {
         case 'X':
           $('#display').text(parseInt(num) * parseInt(number));
           break;
         case '/':
            $('#display').text(parseInt(num) / parseInt(number));
            break;
         case '-':
            $('#display').text(parseInt(num) - parseInt(number));
            break;
         case '+':
            $('#display').text(parseInt(num) + parseInt(number));
            break;
     }
   };
      switch (ops) {
        case 'X':
          clr();
          op = ops;
          break;
        case '/':
          clr();
          op = ops;
          break;
        case '-':
          clr();
          op = ops;
          break;
        case '+':
          clr();
          op = ops;
          break;
        case '=':
          clr();
          calc();
          break;
        }
      });
