let todoitems_container=document.getElementById("todoItemsContainer");
todoitems_container.classList.add("container");
let addtodo_button=document.getElementById("buttonelement");

let todoList=[
{
    text: "Learn HTML",
    uniqueNo: 1
},
{
    text: "Learn CSS",
    uniqueNo: 2
},
{
    text: "Learn JS",
    uniqueNo: 3
},
{
    text: "Learn BOOTSTRAP",
    uniqueNo: 4
}
];

let todosCount=todoList.length;


function onTodoStatusChange(checkboxId, labelId) {
  let checkboxElement = document.getElementById(checkboxId);
  let labelElement = document.getElementById(labelId);
  if(checkboxElement.checked===true)
      labelElement.classList.toggle('checked');
  else
      labelElement.classList.remove('checked');
}


function onDeleteTodo(todoId) {
  let todoElement = document.getElementById(todoId);

  todoitems_container.removeChild(todoElement);
}


function onAddTodo() {
  
  let user_input_element=document.getElementById("inputelement");

  if(user_input_element.value===""){
    alert("Please enter valid text");
    return;
  }

  let newtodo={
    text:user_input_element.value,
    uniqueNo:todosCount+1
  }
  
  create_and_append(newtodo);
  user_input_element.value="";

}

addtodo_button.onclick=function(){
  onAddTodo();
}




function create_and_append(todo){
	let todoId = "todo" + todo.uniqueNo;
  let checkboxId ="checkbox" + todo.uniqueNo;
  let labelId = "label" + todo.uniqueNo;
  
  let todo_li_element=document.createElement("li");
  todo_li_element.classList.add("d-flex","flex-row","todo-items-container");
  todo_li_element.id=todoId;
  todoitems_container.appendChild(todo_li_element);



  let input_element=document.createElement("input");
  input_element.type="checkbox";
  input_element.id=checkboxId;
  input_element.onclick= function(){
     onTodoStatusChange(checkboxId, labelId);
  }
    
  input_element.classList.add("ckeckbox-input");
  todo_li_element.appendChild(input_element);



  let label_element=document.createElement("label");
  label_element.setAttribute("for",checkboxId);
  label_element.id = labelId;
  label_element.classList.add("checkbox-label");
  label_element.textContent = todo.text;
  todo_li_element.appendChild(label_element);
   
  

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

  deleteIcon.onclick = function () {
    onDeleteTodo(todoId);
  };

  label_element.appendChild(deleteIcon);

}


for (let todo of todoList) {
  create_and_append(todo);
}


