$(document).ready(function(){
    var height = parseInt(prompt("Enter your height in inches:"));
  
    if (height >= 60) {
      $('#superman').show();
    } else if (height > 55 && height < 60){
      $('#desert-storm').show();
    } else {
      $('#fun-times').show();       
    }

});
