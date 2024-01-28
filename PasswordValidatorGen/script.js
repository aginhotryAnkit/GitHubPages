$(document).ready(function () {
    console.log("Developed By Ankit Aginhotry\nGithub: aginhotryAnkit");

    // global vars 
    const specialCharacters = [
        '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@',
        '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~',
    ];

    //flag for hide and unhide the password field
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

    //function for managing the password complexity progressBar and info text
    function validator(currentVal){
        currentVal = currentVal.replace(/\s/g, '');
        let duplicate = [];
        let countSpacialCharCount = 0;
        let upperCaseCharCount = 0;
        let lowerCaseCharCount = 0;
        let numericCount = 0;
        let passwordComplexity = 0;

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

        //calculating the password complexity
        passwordComplexity += countSpacialCharCount*19+upperCaseCharCount*5+lowerCaseCharCount*5+numericCount*5;
        console.log(passwordComplexity);
        if(passwordComplexity>100){
            passwordComplexity = 100;
        }

        //Changing the progressBar on the basic of complexity of password
        if(passwordComplexity>=0 && passwordComplexity<=30){
            //poor
            $(".progress").css("width", "30%");
            $(".progress").css("background", "red");
            
        } else if (passwordComplexity>30 && passwordComplexity<=55){
            //avg
            $(".progress").css("width", "60%");
            $(".progress").css("background", "#FFC000");

        } else if(passwordComplexity>55 && passwordComplexity<=100){
            //excellent
            if(countSpacialCharCount>0){
                $(".progress").css("width", "100%");
                $(".progress").css("background", "green");
            } else {
                $(".progress").css("width", "70%");
                $(".progress").css("background", "#FFC000");
            }
        }

        // by default the the li is being red
        $("li").css("color", "red");

        //changing the info text as the basic of password length, case and chars. 
        currentVal.length>=8?$("#eightChar").css("color", "green"):"";
        lowerCaseCharCount>0? $("#oneLowerCase").css("color", "green"):"";
        upperCaseCharCount>0? $("#oneUpperCase").css("color", "green"):"";
        countSpacialCharCount>0? $("#oneSpacialChar").css("color", "green"):"";
        currentVal.length==0?$(".progress").css("width", "0%"):"";

        //console debugging code
        // console.log("total passwordComplexity =", passwordComplexity);
        // console.log(currentVal[currentVal.length-1]);
        // console.log("Spacial Character :", countSpacialCharCount);
        // console.log("Uppercase :", upperCaseCharCount);
        // console.log("Lowercase :", lowerCaseCharCount);
        // console.log("Numeric :", numericCount);
    }

    //function for creating a strong password
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

    //event append the generate song password to the password field
    $(".genBtn").click(function (e) { 
        e.preventDefault();
        let password = generateRandomStrongPassword(Math.floor(Math.random() * 3)+8)
        $(".pass").val(password);
        validator(password);
    });

    //when the key is pressed also check the password complexity and update the ui accordingly
    $(".pass").keydown(function (e) { 
        let currentVal = $(this).val();
        console.log("hello");
        validator(currentVal);
    });

});
