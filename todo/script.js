var todoList = {};
var count = 0;

$(document).ready(function () {
    //update the element from the list
    $(".update").click(function (e) {
        var childID = $(this).attr("id");

        // $("#li"+childID).remove();
    });

    //delete the element from the list
    $(".delete").click(function (e) {
        var childID = $(this).attr("id");
        console.log("hello");
        // $("#li"+childID).remove();
        // var todoList = deleteTask(childID, todoList);
        // displayTodoList();
    });

    //function to create a todo
    $("#todoCreateBtn").click(function (e) {
        e.preventDefault();
        let todoText = $("#newTodo").val();
        var duplicateCheck = ((value, todoList) => {
            return Object.values(todoList).includes(value);
        })(todoText, todoList);

        if (duplicateCheck) {
            alert("Task is already exist");
        } else {
            todoList[count + "ABC"] = todoText;
            count++;
        }

        displayTodoList();
    });
});

//remove the task from the object
function deleteTask(key, obj = {}) {
    console.log("before delete");
    console.log(obj);
    var newObj = {};
    var keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
        if (keys[i] !== key) {
            newObj[keys[i]] = obj[keys[i]];
        }
        console.log(obj.hasOwnProperty(keys[i]));
    }
    console.log("before delete");

    console.log(newObj);
    return newObj;
}

//display todo list
function displayTodoList() {
    let htmStr = "";
    Object.keys(todoList).forEach((element) => {
        htmStr += `<li id="${"li" + element}">
        <div class="content">
            <h3>Default Title</h3>
            <p>${todoList[element]}</p>
        </div>
        <div class="buttons">
            <button class="delete" id="${element} ">Delete</button>
            <button class="update" id="${element + "Update"} ">Update</button>
        </div> 
        </li>`;
        count++;
    });
    $("ul").html(htmStr);
    console.log("Display RUn");

    $(".delete").click(function (e) { 
        var childID = $(this).attr("id");
         $("#li"+childID).remove();
    });
}
