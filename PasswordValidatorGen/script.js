$(document).ready(function () {
    console.log("jQuery working");

    // global vars 
    const specialCharacters = [
        '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@',
        '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', ' ', // including space as a special character
    ];


    var password = true;
    $(".progress").css("width", "30%");

    $(".pass").keyup(function (e) { 
        let currentVal = $(this).val();
        validator(currentVal);
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

    function validator(currentVal){
        currentVal = currentVal.replace(/\s/g, '');
        let duplicate = [];
        let countSpacialCharCount = 0;
        let upperCaseCharCount = 0;
        let lowerCaseCharCount = 0;
        let numericCount = 0;
        let result = 0;

        //count the special char from the given text
        currentVal.split("").map((ele,acc)=>{
            if(specialCharacters.includes(ele) && !duplicate.includes(ele)){
                countSpacialCharCount+=1;
            }else if(ele.charCodeAt(0)>=65 && ele.charCodeAt(0)<=90 && !duplicate.includes(ele)){
                upperCaseCharCount+=1;
            }else if(ele.charCodeAt(0)>=97 && ele.charCodeAt(0)<=122 && !duplicate.includes(ele)){
                lowerCaseCharCount+=1;
            } else if(!duplicate.includes(ele)){
                numericCount+=1;
            }
            duplicate.push(ele);
        }, 0);

        result += countSpacialCharCount*19+upperCaseCharCount*5+lowerCaseCharCount*5+numericCount*5;
        console.log(result);
        if(result>100){
            console.log(result);
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

        if(currentVal.length==0){
            $(".progress").css("width", "0%");
        }

        // console.log("total result =", result);
        // console.log(currentVal[currentVal.length-1]);
        // console.log("Spacial Character :", countSpacialCharCount);
        // console.log("Uppercase :", upperCaseCharCount);
        // console.log("Lowercase :", lowerCaseCharCount);
        // console.log("Numeric :", numericCount);
    }


    function generateRandomStrongPassword(length) {
        // Define characters to use in the password
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numericChars = '0123456789';
        const specialChars = '!@#$%^&*()-_+=';
    
        // Combine all characters
        const allChars = lowercaseChars + uppercaseChars + numericChars + specialChars;
    
        let password = '';
        for (let i = 0; i < length; i++) {
            // Select a random character from allChars
            const randomIndex = Math.floor(Math.random() * allChars.length);
            password += allChars.charAt(randomIndex);
        }
        return password;
    }

    $(".genBtn").click(function (e) { 
        e.preventDefault();
        let password = generateRandomStrongPassword(Math.floor(Math.random() * 3)+8)
        $(".pass").val(password);
        validator(password);
    });

    $(".pass").keydown(function (e) { 
        let currentVal = $(this).val();
        console.log("hello");
        validator(currentVal);
    });

});
