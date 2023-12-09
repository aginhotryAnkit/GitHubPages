$(document).ready(function () {
  console.log("ANKIT AGINHOTRY");
  var width = window.innerWidth;
  var height = window.innerHeight;
  console.log("Height: ",height);
  console.log("Width: ",width);
  console.log("Height*Width :",height*width);
  var numberOfBoxHorizental=(width/115);
  var numberOfBoxVertical=(height/115);
  var totalBox=numberOfBoxVertical*numberOfBoxHorizental;
  var htm="";
  for (let i = 0; i <(totalBox); i++) {
    htm+="<div id='rd"+i+"' class='random'></div>";
  }
  $("body").html(htm);
  var divlength = $("body").children().length;

  console.log("sdsdsdsd",divlength);
  function randomColor() {
    $("body")
      .children()
      .each(function () {
        var childID = $(this).attr("id");
        $("#" + childID).css("background-color", getRandomColor());
        $("#" + childID).text(getRandomColor());
      });
  }
  randomColor();

  //random color generatin using jquery funciton
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  console.log(getRandomColor());
  var priviousValue = "";
  $(".random").click(function (e) {
    var childID = $(this).attr("id");

    if(priviousValue!=="" && childID!==priviousValue){
      $("#"+priviousValue).css("transform", "scale3d(1,1,1)");
      $("#"+priviousValue).css("transition-duration", "0.3s");
      console.log("i am here", priviousValue);
    } 

      $("#"+childID).css("transform", "scale3d(1.5,1.5,1)");
      console.log(childID);
      priviousValue = childID;
  });
  console.log("priviousValue :",priviousValue);

  $(".random").on("focusout", function() {
    console.log("random focusout");
  });
});
