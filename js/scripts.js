$(document).ready(function(){
    var height = parseInt(prompt("Enter your height in inches:"));
  
    if (height >= 60) {
      $("#superman").addClass("highlight");
      $("#desert-storm").addClass("highlight-red");
      $("#fun-times").addClass("highlight-red");
      // $('#superman').show();
    } else if (height > 55 && height < 60){
      // $('#desert-storm').show();
      $("#desert-storm").addClass("highlight");
      $("#superman").addClass("highlight-red");
      $("#fun-times").addClass("highlight-red");
    } else {
      $("#fun-times").addClass("highlight");
      $("#desert-storm").addClass("highlight-red");
      $("#superman").addClass("highlight-red");
      // $('#fun-times').show();       
    } 

});
