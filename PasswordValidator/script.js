$(document).ready(function () {
    console.log("jQuery working");

    // global vars 
    const specialCharacters = [
        '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@',
        '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', ' ', // including space as a special character
    ];


    var password = true;
    $(".progress").css("width", "30%");

    $(".pass").keypress(function (e) { 
        let currentVal = $(this).val();
        currentVal = currentVal.replace(/\s/g, '');
        let countSpacialCharDup = [];
        let countSpacialCharCount = 0;
        let upperCaseCharCount = 0;
        let lowerCaseCharCount = 0;
        let numericCount = 0;

        //count the special char from the given text
        currentVal.split("").map((ele,acc)=>{
            if(specialCharacters.includes(ele) && !countSpacialCharDup.includes(ele)){
                countSpacialCharCount+=1;
                countSpacialCharDup.push(ele);
            }else if(ele.charCodeAt(0)>=65 && ele.charCodeAt(0)<=90){
                upperCaseCharCount+=1;
            }else if(ele.charCodeAt(0)>=97 && ele.charCodeAt(0)<=122){
                lowerCaseCharCount+=1;
            } else{
                numericCount+=1;
            }
        }, 0);

        let result = countSpacialCharCount*20+upperCaseCharCount*5+lowerCaseCharCount*5+numericCount*5;
        if(result>100){
            result = 100;
           
        }
        if(result>=0 && result<=30){
            //poor
            $(".progress").css("width", "30%");
            $(".progress").css("background", "red");
            
        } else if (result>30 && result<=55){
            //avg
            $(".progress").css("width", "60%");
            $(".progress").css("background", "#FFC000");

        } else if(result>55 && result<=100){
            //excellent
            if(countSpacialCharCount>0){
                $(".progress").css("width", "100%");
                $(".progress").css("background", "green");
            } else {
                $(".progress").css("width", "70%");
                $(".progress").css("background", "#FFC000");
            }
        }

        $("li").css("color", "red");

        if(currentVal.length>=8){
            $("#eightChar").css("color", "green");
        }

        if(lowerCaseCharCount>0){
            //green
            $("#oneLowerCase").css("color", "green");

        }

        if(upperCaseCharCount>0){
            //green
            $("#oneUpperCase").css("color", "green");

        }

        if(countSpacialCharCount>0){
            //green
            $("#oneSpacialChar").css("color", "green");

        }



        console.log("total result =", result);

        console.log(currentVal[currentVal.length-1]);
        console.log("Spacial Character :", countSpacialCharCount);
        console.log("Uppercase :", upperCaseCharCount);
        console.log("Lowercase :", lowerCaseCharCount);
        console.log("Numeric :", numericCount);
    });


    //hide the password
    $(".pass").click(function (e) { 
        e.preventDefault();
        if(!password){
            $(this).attr("type", "password");
        }
    });

    $(".showBtn").click(function (e) { 
        e.preventDefault();
        password = false;
        $(".pass").attr("type", "text");
    });

});
