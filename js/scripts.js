$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    event.preventDefault();
    console.log("check");
    var input1 = $("input#first").val();
    var input2 = $("input#second").val();
    var input3 = $("input#third").val();
    var array = [input1, input2, input3];

    $("p#output").text(array);


  });
});
