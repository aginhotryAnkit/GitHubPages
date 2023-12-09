function notworking() {
    alert('This Operation is not working yet!');
}

var isOprator = false;
var arr = [];
var dotCount = 0;
function display(chr) {
    if (!isOprator) {
        document.getElementById("display").value += chr;
    } else {
        document.getElementById("display").value = chr;
        isOprator = false
    }
}

function Dot(dot) {
    if (dotCount == 0) {
        document.getElementById("display").value += dot;
        dotCount = 1;
    }
}

function op(op) {
    isOprator = true;
    var values = document.getElementById("display").value;
    arr.push(values);
    var ress;
    if (arr.length >= 3) {
        ress = evaluatearr();
        arr.splice(0, arr.length, ress);
        document.getElementById("display").value = ress;
    }
    arr.push(op);
}

function clearr() {
    document.getElementById("display").value = '';
    dotCount = 0;
    arr = [];
}

function evaluatearr() {
    var ress;
    switch (arr[1]) {
        case '+':
            ress = parseFloat(arr[0]) + parseFloat(arr[2]);
            break;
        case '-':
            ress = arr[0] - arr[2];
            break;
        case '*':
            ress = arr[0] * arr[2];
            break;
        case '/':
            ress = arr[0] / arr[2];
            break;
        default:
            alert("Please Enter valid Operator..");
            reset();
            break;
    }
    //alert("called")
    return ress;
}

function evaluateE() {
    if (document.getElementById("display").value != '') {
        arr.push(parseFloat(document.getElementById("display").value));
    }
    var ress = 0;
    if (arr.length == 3) {
        ress = evaluatearr();
        document.getElementById("display").value = ress;
    } else if (arr.length > 3) {
        arr.splice(0, arr.length - 3);
        ress = evaluatearr();
        document.getElementById("display").value = ress;
    }
}

//not working...
// function cpydata(){
//     var val=document.getElementById('display').value;
//     if(val==""){
//         alert('Nothing to Copy');
//     }
//     else{
//         window.clipboardData.setData(val, text);
//         alert('data Copy!');

//     }
// }