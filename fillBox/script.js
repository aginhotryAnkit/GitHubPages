$(document).ready(function () {
    console.log("jquery working ...");
    var width = window.innerWidth;
    var height = window.innerHeight;
    $("#h").html(height);
    $("#w").html(width);
    console.log("Height: ",height);
    console.log("Width: ",width);
    console.log("Height*Width :",height*width);

    var numberOfBoxHorizental=(width/115);
    var numberOfBoxVertical=(height/115);
    var totalBox=numberOfBoxVertical*numberOfBoxHorizental;
    console.log("Number Of Box Vertically | : "+Math.floor(numberOfBoxVertical));
    console.log("Number of Box Horizentaily ---:"+Math.floor(numberOfBoxHorizental));
    console.log("Number Of Box Vertically | : "+(numberOfBoxVertical));
    console.log("Number of Box Horizentaily ---:"+(numberOfBoxHorizental));
    console.log("Total Box :"+totalBox);
    console.log("Formula :"+(height*width)/12000);
    let str="";
    for (let i = 0; i <(totalBox); i++) {
        str+="<div id='child'"+i+" class='child'></div>";
    }
    $("body").html(str);

    function finddivident(value){
        console.log("this function is working");
        for (let i = 50; i < value; i++) {
            if(value%i==0){
                return i;
            }
        }
        return height;
    }

});
//2928118.5