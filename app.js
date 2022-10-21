let toDoList = [];
let toDoText = "";
let counter = 0

function changeText(event) {
  toDoText = event.target.value;
}

function addToDoList() {
  if (!toDoText) {
    return;
  }

  toDoList.push({
    text: toDoText,
    id: counter++
  });

  renderToDos();
}

function removeToDoList(id){
toDoList = toDoList.filter(todo => todo.id !== id)

renderToDos()
}

function renderToDos() {
  const toDoListHTML = toDoList.map(
    (todo) => `<li>
  ${todo.text}
  <button class="todo__delete" onclick="removeToDoList(${todo.id})">
    x
  </button>
</li>`
  ).join("")

  document.querySelector('.list').innerHTML = toDoListHTML
}
