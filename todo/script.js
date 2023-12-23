var todoList = {};
var count=0;

//display todo list
function displayTodoList(){
    console.log("//");
    let htmStr = "";
    Object.keys(todoList).forEach(element=>{
        console.log(todoList[element]);
        htmStr += `<li id="${element}">
        <div class="content">
            <h3>Default Title</h3>
            <p>${todoList[element]}</p>
        </div>
        <div class="buttons">
            <button class="delete" id="${element+"Delete"}  onclick="deleteItem(${count})">Delete</button>
            <button class="update" id="${element+"Update"}  onclick="updateItem(${count})">Update</button>
        </div> 
        </li>`;
        count++;
    });

    $("ul").html(htmStr);
}


$(document).ready(function () {
    console.log("Jquery Working Fine");

    //function to create a todo 
    $("#todoCreateBtn").click(function (e) { 
        e.preventDefault();
        let todoText = $("#newTodo").val();
        var duplicateCheck = ((value,todoList)=>{
            return Object.values(todoList).includes(value);
        })(todoText, todoList);

        if(duplicateCheck){
            alert("Task is already exist");
        } else {
            todoList[count+"ABC"]=todoText;
            count++;
        }
        displayTodoList();
    });
   
    //not clickable
    $(".update").click(function(e){
        console.log(e);
    });
});