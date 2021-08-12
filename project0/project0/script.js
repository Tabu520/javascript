const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

var itemCount = 0;
var uncheckCount = 0;



function newTodo() {
  var li = document.createElement("li");
  var input = document.getElementById("inputValue").value;
  var t = document.createTextNode(input);

  li.appendChild(t);
  if (input === '') {
    alert("You must input something!");
  } else {
    list.appendChild(li);
  }

  var checkbox = document.createElement("INPUT");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add('todo-checkbox');
  li.appendChild(checkbox);

  var btnDelete = document.createElement("button");
  btnDelete.textContent = "X";
  btnDelete.classList.add('button', "todo-delete");
  li.appendChild(btnDelete);

  itemCount++;
  uncheckCount++;
  itemCountSpan.textContent = itemCount;
  uncheckedCountSpan.textContent = uncheckedCount;
}

function deleteTodo() {
  
}
